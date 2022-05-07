import { types } from "../../types/types";

describe('Pruebas con nuestros types', () => { 
    test('debe tener estos types', () => { 
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
        
            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',
        
            notesAddNew: '[Notes] New Note',
            notesActive: '[Notes] Set Active Note',
            notesLoad: '[Notes] Load Note',
            notesUpdated: '[Notes] Updated Note',
            notesUploadFile: '[Notes] Upload File image',
            notesDelete: '[Notes] Delete Note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
        })
     });
 });