// #region Interface Imports
import { IHomePage } from "@Interfaces/Pages/Home";
// #endregion Interface Imports

export interface IStore {
    home: IHomePage.IStateProps;
}
