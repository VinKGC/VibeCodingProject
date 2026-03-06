{
  "todolistUI": {
    "device": "smartwatch",
    "theme": {
      "background": {
        "color": "#D7C4A3", // Earthy beige tone
        "texture": "soft gradient with earthy tones"
      },
      "textColor": {
        "primary": "#4A3C31", // Dark brown
        "secondary": "#FFFFFF",
        "highlight": "#FF5252" // Warm earthy highlight
      },
      "font": {
        "family": "Sans-serif",
        "size": "small",
        "weight": "regular"
      }
    },
    "layout": {
      "shape": "circular", // Ensuring the structure is rounded
      "sections": [
        {
          "type": "header",
          "content": "Work",
          "alignment": "center",
          "fontSize": "medium",
          "fontWeight": "bold",
          "color": "#4A3C31" // Dark brown
        },
        {
          "type": "task",
          "title": "Finalize storyboard",
          "status": "incomplete",
          "statusIcon": {
            "shape": "circle",
            "color": "#A67B5B", // Warm earthy highlight
            "position": "left"
          },
          "description": "Create new artwork based on feedback from the design team.",
          "fontSize": "small",
          "fontWeight": "regular",
          "color": "#4A3C31", // Dark brown
          "actions": [
            {
              "type": "button",
              "label": "Review",
              "icon": "checkmark",
              "color": "#6B8E23", // Olive green
              "position": "bottom-right"
            }
          ]
        },
        {
          "type": "footer",
          "content": "1/2",
          "alignment": "center",
          "fontSize": "small",
          "fontWeight": "regular",
          "color": "#6B8E23" // Olive green
        }
      ]
    },
    "overdueView": {
      "header": {
        "content": "Today",
        "subContent": "Overdue",
        "alignment": "center",
        "fontSize": "medium",
        "fontWeight": "bold",
        "color": "#4A3C31" // Dark brown
      },
      "taskSummary": {
        "title": "Finalize storyboard",
        "status": "incomplete",
        "statusIcon": {
          "shape": "circle",
          "color": "#A67B5B", // Warm earthy highlight
          "position": "left"
        },
        "progress": "1/2",
        "dueDate": {
          "start": "24 Jan",
          "end": "Today",
          "color": "#4A3C31" // Dark brown
        },
        "fontSize": "small",
        "fontWeight": "regular",
        "color": "#4A3C31" // Dark brown
      }
    }
  }
}