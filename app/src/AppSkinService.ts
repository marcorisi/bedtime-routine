import { Colors } from "./colors";
import { Who } from "./domain";

interface Skin {
  backgroundColor: string;
  backgroundLightColor: string;
  primaryTextColor: string;
  textColor?: string;
  // Add other styles
}

class AppSkinService {
  private static instance: AppSkinService;
  private who: Who | undefined;

  private constructor() {}

  public setWho(who: Who) {
    this.who = who;
  }

  public static getInstance(): AppSkinService {
    if (!AppSkinService.instance) {
      AppSkinService.instance = new AppSkinService();
    }
    return AppSkinService.instance;
  }

  public getSkin(): Skin {
    switch (this.who) {
      case Who.MOM:
        return {
          backgroundColor: Colors.backgroundPink,
          backgroundLightColor: Colors.backgroundLightPink,
          primaryTextColor: Colors.pink,
          // ...other styles
        };
      case Who.DAD:
        return {
          backgroundColor: Colors.backgroundBlue,
          backgroundLightColor: Colors.backgroundLightBlue,
          primaryTextColor: Colors.blue,
          // ...other styles
        };
      // Add cases for other days of the week
      default:
        return {
          backgroundColor: Colors.backgroundPink,
          backgroundLightColor: Colors.backgroundLightPink,
          primaryTextColor: Colors.pink,
          // ...other styles
        };
    }
  }
}

export default AppSkinService;
