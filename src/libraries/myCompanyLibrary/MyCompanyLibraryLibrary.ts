import { ServiceKey, ServiceScope } from "@microsoft/sp-core-library";
import { PageContext } from "@microsoft/sp-page-context";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import {  IExtensibilityLibrary, 
          IComponentDefinition, 
          ISuggestionProviderDefinition, 
          ISuggestionProvider,
          ILayoutDefinition, 
          LayoutType, 
          ILayout,
          IAdaptiveCardAction,
          LayoutRenderType,
          IQueryModifierDefinition,
          IQueryModifier,
          IDataSourceDefinition,
          IDataSource
} from "@pnp/modern-search-extensibility";
import * as Handlebars from "handlebars";
import { MyCustomComponentWebComponent } from "../CustomComponent";


export class MyCompanyLibraryLibrary implements IExtensibilityLibrary {
  

  public static readonly serviceKey: ServiceKey<MyCompanyLibraryLibrary> =
  ServiceKey.create<MyCompanyLibraryLibrary>('SPFx:MyCustomLibraryComponent', MyCompanyLibraryLibrary);

  private _spHttpClient: SPHttpClient;
  private _pageContext: PageContext;
  private _currentWebUrl: string;

  constructor(serviceScope: ServiceScope) {
    serviceScope.whenFinished(() => {
      this._spHttpClient = serviceScope.consume(SPHttpClient.serviceKey);
      this._pageContext = serviceScope.consume(PageContext.serviceKey);
      this._currentWebUrl = this._pageContext.web.absoluteUrl;
    });
  }
  public invokeCardAction(action: IAdaptiveCardAction): void {
    throw new Error("Method not implemented.");
  }

  public getCustomLayouts(): ILayoutDefinition[] {
    return [    
    ];
  }

  public getCustomWebComponents(): IComponentDefinition<any>[] {
    return [
      {
        componentName: 'my-custom-component',
        componentClass: MyCustomComponentWebComponent
      }
    ];
  }

  public getCustomSuggestionProviders(): ISuggestionProviderDefinition[] {
    return [
        
    ];
  }

  public registerHandlebarsCustomizations(namespace: typeof Handlebars) {

    // Register custom Handlebars helpers
    // Usage {{myHelper 'value'}}
    namespace.registerHelper('myHelper', (value: string) => {
      return new namespace.SafeString(value.toUpperCase());
    });
  }

 

  public getCustomQueryModifiers(): IQueryModifierDefinition[]
  {
    return [
    
    ];
  
    }
  public getCustomDataSources(): IDataSourceDefinition[] {
    return [
     
    ];
  }

  public name(): string {
    return 'MyCustomLibraryComponent';
  }
}
