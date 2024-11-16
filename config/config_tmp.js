export class Config {
  static TELEGRAM_APP_ID = undefined; // YOUR APP ID EX : 324893724923
  static TELEGRAM_APP_HASH = undefined; // YOUR APP HASH EX: "aslkfjkalsjflkasf"
  static DISPLAY = "BLESS"; //TWIST or BLESS
  static USEAUTOUPGRADE = true; //USE AUTO UPGRADE OR NO
  static REPAINTER = true; //USE INCORRECT COLOR REPAINTER
  static CUSTOMDELAYINMIN = undefined; //CUSTOM DELAY IN MINUTES EX : 60 = 60 minutes
  static TEMPLATE = {
    templateID: 1307361893,
    startArea: 121121,
    endArea: 157184,
    correctColor: "#00CC78",
  }; // configure fren template by finding the id, color, start area and end area (is a rectangle start from top left, and end on bottom right)
}
