/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface AzureDevOpsTasksSchema {
  /**
   * A unique guid for this task
   */
  id?: string;
  /**
   * Name with no spaces
   */
  name?: string;
  /**
   * Descriptive name (spaces allowed)
   */
  friendlyName?: string;
  /**
   * Detailed description of what your task does
   */
  description?: string;
  helpMarkDown?: string;
  author?: string;
  preview?: boolean;
  /**
   * Task is deprecated only when the latest version is marked as deprecated. Deprecated tasks appear at the end of searches under a section that is collapsed by default.
   */
  deprecated?: boolean;
  /**
   * Toggles showing the environment variable editor in the task editor UI. Allows passing environment variables to script based tasks.
   */
  showEnvironmentVariables?: boolean;
  runsOn?: ("Agent" | "MachineGroup" | "Server")[];
  /**
   * Where the task appears in Azure DevOps. Use the 'Azure *' categories for Azure DevOps and Azure DevOps Server 2019. Use the other categories for Team Foundation Server 2018 and below.
   */
  category?:
    | "Build"
    | "Utility"
    | "Test"
    | "Package"
    | "Deploy"
    | "Azure Repos"
    | "Azure Boards"
    | "Azure Pipelines"
    | "Azure Test Plans"
    | "Azure Artifacts";
  /**
   * Describes groups that task properties may be logically grouped by in the UI.
   */
  groups?: {
    name: string;
    displayName: string;
    isExpanded?: boolean;
  }[];
  /**
   * Allows you to define a list of demands that a build agent requires to run this build task.
   */
  demands?: string[];
  minimumAgentVersion?: string;
  /**
   * Always update this when you release your task, so that the agents utilize the latest code.
   */
  version?: {
    Major: number;
    Minor: number;
    Patch: number;
  };
  /**
   * This is how the task will be displayed within the build step list - you can use variable values by using $(variablename)
   */
  instanceNameFormat?: string;
  inputs?: {
    /**
     * The variable name to use to store the user-supplied value
     */
    name: string;
    /**
     * The text displayed to the user for the input label
     */
    label: string;
    /**
     * The type that dictates the control rendered to the user.
     */
    type: ("boolean" | "filePath" | "multiLine" | "pickList" | "radio" | "secureFile" | "string") | string;
    /**
     * The default value to apply to this input.
     */
    defaultValue?: string | boolean;
    /**
     * Whether the input is a required field (default is false).
     */
    required?: boolean;
    /**
     * Help to be displayed when hovering over the help icon for the input. To display URLs use the format [Text To Display](http://Url)
     */
    helpMarkDown?: string;
    /**
     * Setting this to the name of a group defined in 'groups' will place the input into that group.
     */
    groupName?: string;
    /**
     * Allow's you to define a rule which dictates when the input will be visible to a user, for example "variableName = value"
     */
    visibleRule?: string;
    properties?: {
      editableOptions?: "True" | "False";
      [k: string]: any;
    };
    options?: {
      [k: string]: any;
    };
  }[];
  dataSourceBindings?: {
    target?: string;
    endpointId?: string;
    dataSourceName?: string;
    parameters?: {
      [k: string]: any;
    };
    resultTemplate?: string;
  }[];
  sourceDefinitions?: {
    target?: string;
    endpoint?: string;
    selector?: string;
    keySelector?: string;
    authKey?: string;
  }[];
  /**
   * Execution options for this task
   */
  execution?: {
    Node?: ExecutionObject;
    PowerShell3?: ExecutionObject;
  };
  messages?: {
    [k: string]: any;
  };
  $schema?: string;
}
export interface ExecutionObject {
  /**
   * The target file to be executed. You can use variables here in brackets e.g. $(currentDirectory)ilename.ps1
   */
  target?: string;
  platforms?: ("windows")[];
  [k: string]: any;
}
