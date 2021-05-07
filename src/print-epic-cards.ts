import WITClient = require("TFS/WorkItemTracking/RestClient");
import Models = require("TFS/WorkItemTracking/Contracts");
import Q = require("q");
const epicCardTemplate = require("epic-card.handlebars");

const extensionContext = VSS.getExtensionContext();
const client = WITClient.getClient();

interface IQuery {
  id: string;
  isPublic: boolean;
  name: string;
  path: string;
  wiql: string;
}

interface IActionContext {
  id?: number;
  workItemId?: number;
  query?: IQuery;
  queryText?: string;
  ids?: number[];
  workItemIds?: number[];
  columns?: string[];
}

const printEpicCards = {
  getMenuItems: (context: any) => {
    // poop - might need to add something here to only let it show on epics
    // poop - would need to handle the case where they select epics and other types
    let menuItemText = "Print Epic Card";
    if (context.workItemIds && context.workItemIds.length > 1) {
      menuItemText = "Print Epics Cards";
    }

    return [
      {
        action: (actionContext: IActionContext) => {
          const wids = actionContext.workItemIds ||
            actionContext.ids || [actionContext.workItemId || actionContext.id];

          return getWorkItems(wids)
            .then(workItems => prepare(workItems))
            .then(pages => {
              return Q.all(pages);
            })
            .then((pages: any) => {
              const workItems = document.createElement("div");
              workItems.setAttribute("class", "container border");
              let wiCardCount = 0;
              pages.forEach(page => {
                let epicCard: any;

                wiCardCount++;
                if (page.type !== "processerror") {
                  epicCard = epicCardTemplate({
                    // poop - this is where you need to map new fields to your handle bar template
                    number: page.id,
                    style_wiNumber: page.id,
                    work_item_type: page.type,
                    title: page.title,
                    estimate: page.estimate,
                    assigned_to: page.assigned_to,
                    area_path: page.area_path,
                    iteration_path: page.iteration_path,
                    tags: page.tags,
                    border_color: page.border_color,
                    icon: page.icon
                  });
                  workItems.innerHTML += epicCard;
                }
                else {
                  workItems.innerHTML  += "<div> ERROR <br>" + page.message + "</div>";
                }

                if ((wiCardCount % 3) === 0 && pages.length > wiCardCount) {
                  workItems.innerHTML += "<p style='page-break-before: always'><br/>&nbsp;<br/>";
                }
              });
              document.body.appendChild(workItems);

              setTimeout(() => {
                window.focus(); // needed for IE
                let ieprint = document.execCommand("print", false, null);
                if (!ieprint) {
                  (window as any).print();
                }
                workItems.parentElement.removeChild(workItems);
              }, 1000);
            });
        },
        icon: "img/icon.png",
        text: menuItemText,
        title: menuItemText
      } as IContributedMenuItem
    ];
  }
};

// Promises
function getWorkItems(wids: number[]): IPromise<Models.WorkItem[]> {
  return client.getWorkItems(
    wids,
    undefined,
    undefined,
    Models.WorkItemExpand.Fields
  );
}

function getWorkItemDefinition(thisWorkItem: Models.WorkItem): IPromise<Models.WorkItemType> {
  return client.getWorkItemType(thisWorkItem.fields["System.TeamProject"], thisWorkItem.fields["System.WorkItemType"]);
}

function getLastPathValue(pathText: string): string {
  if (pathText.length > 0) {
    let pathArray: string[] = pathText.split("\\");
    return pathArray[pathArray.length - 1];
  }
  else {
    return pathText;
  }
}

function prepare(workItems: Models.WorkItem[]) {
  return workItems.map(item => {
    let result = {};

    return getWorkItemDefinition(item).then(thisWIT => {
      try {
        let template_filled: boolean = false;
        let work_item_color = thisWIT["color"];
        let work_item_icon = thisWIT.icon["url"];
        let tag_val = item.fields["System.Tags"];
        let area_val = getLastPathValue(item.fields["System.AreaPath"]);
        let iteration_val = getLastPathValue(item.fields["System.IterationPath"]);
        // if (item.fields["System.WorkItemType"] === "User Story") {
        //   result = {
        //     "type": item.fields["System.WorkItemType"],
        //     "title": item.fields["System.Title"],
        //     "id":  item.fields["System.Id"],
        //     "estimate" : item.fields["Microsoft.VSTS.Scheduling.StoryPoints"],
        //     "assigned_to": item.fields["System.AssignedTo"],
        //     "area_path": area_val,
        //     "iteration_path": iteration_val,
        //     "tags": tag_val,
        //     "border_color": work_item_color,
        //     "icon": work_item_icon
        //   };
        //   template_filled = true;
        // }

        // if (item.fields["System.WorkItemType"] === "Product Backlog Item") {
        //   result = {
        //     "type": item.fields["System.WorkItemType"],
        //     "title": item.fields["System.Title"],
        //     "id":  item.fields["System.Id"],
        //     "estimate" : item.fields["Microsoft.VSTS.Common.BusinessValue"],
        //     "assigned_to": item.fields["System.AssignedTo"],
        //     "area_path": area_val,
        //     "iteration_path": iteration_val,
        //     "tags": tag_val,
        //     "border_color": work_item_color,
        //     "icon": work_item_icon
        //   };
        //   template_filled = true;
        // }

        // if (item.fields["System.WorkItemType"] === "Requirement") {
        //   result = {
        //     "type": item.fields["System.WorkItemType"],
        //     "title": item.fields["System.Title"],
        //     "id":  item.fields["System.Id"],
        //     "estimate" : item.fields["Microsoft.VSTS.Scheduling.OriginalEstimate"],
        //     "assigned_to": item.fields["System.AssignedTo"],
        //     "area_path": area_val,
        //     "iteration_path": iteration_val,
        //     "tags": tag_val,
        //     "border_color": work_item_color,
        //     "icon": work_item_icon
        //   };
        //   template_filled = true;
        // }

        // if (item.fields["System.WorkItemType"] === "Bug") {
        //   result = {
        //     "type": item.fields["System.WorkItemType"],
        //     "title": item.fields["System.Title"],
        //     "id":  item.fields["System.Id"],
        //     "estimate" : item.fields["Microsoft.VSTS.Scheduling.OriginalEstimate"],
        //     "assigned_to": item.fields["System.AssignedTo"],
        //     "area_path": area_val,
        //     "iteration_path": iteration_val,
        //     "tags": tag_val,
        //     "border_color": work_item_color,
        //     "icon": work_item_icon
        //   };
        //   template_filled = true;
        // }

        // if (item.fields["System.WorkItemType"] === "Task") {
        //   result = {
        //     "type": item.fields["System.WorkItemType"],
        //     "title": item.fields["System.Title"],
        //     "description":  item.fields["System.Description"],
        //     "id":  item.fields["System.Id"],
        //     "estimate" : item.fields["Microsoft.VSTS.Scheduling.OriginalEstimate"],
        //     "assigned_to": item.fields["System.AssignedTo"],
        //     "area_path": area_val,
        //     "iteration_path": iteration_val,
        //     "tags": tag_val,
        //     "border_color": work_item_color,
        //     "icon": work_item_icon
        //   };
        //   template_filled = true;
        // }
        if (item.fields["System.WorkItemType"] === "Epic") {
          result = {
            "type": item.fields["System.WorkItemType"],
            "title": item.fields["System.Title"],
            "description":  item.fields["System.Description"],
            "id":  item.fields["System.Id"],
            // poop - this is where you need to do some work to get the child features
            // poop - make sure the html format description is being pulled over
            "estimate" : item.fields["Microsoft.VSTS.Common.BusinessValue"],
            "assigned_to": item.fields["System.AssignedTo"],
            "area_path": area_val,
            "iteration_path": iteration_val,
            "tags": tag_val,
            "border_color": work_item_color,
            "icon": work_item_icon
          };
          template_filled = true;
        }
        // poop - I think that you can safely comment this out
        if (!template_filled) {
          result = {
          "type": item.fields["System.WorkItemType"],
          "title": item.fields["System.Title"],
          "description":  item.fields["System.Description"],
          "id":  item.fields["System.Id"],
          "estimate" : item.fields["Microsoft.VSTS.Scheduling.OriginalEstimate"],
          "assigned_to": item.fields["System.AssignedTo"],
          "area_path": area_val,
          "iteration_path": iteration_val,
          "tags": tag_val,
          "border_color": work_item_color,
          "icon": work_item_icon
        };
        }
      }
    catch (e) {
      result = {
        "type": "processerror",
        "message": e
      };
    }
    return result;
  });
  });

}

VSS.register(
  `${extensionContext.publisherId}.${
    extensionContext.extensionId
  }.printepiccards`,
  printEpicCards
);