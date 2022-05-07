import { types } from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { loadNotes } from '../helpers/loadNotes';
import Swal from 'sweetalert2';
import { fileUpload } from '../helpers/fileUpload';

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            url: ''
        }
        const docRef = await db.collection(`${ uid }/journal/notes`).add(newNote);
        dispatch( activeNote(docRef.id, newNote ) );
        dispatch( addNewNote(docRef.id, newNote ) )
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = (id, note) =>({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
});

export const startLoadingNotes = ( uid ) => {
    return async (dispatch) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes(notes) );
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes,
});

export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) =>{
        const uid = getState().auth.uid;

        if( !note.url ){
            delete note.url;
        }

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFireStore );
        dispatch(refreshNote(note.id, noteToFireStore));
        Swal.fire('Saved',note.title,'success');
    }
};

export const refreshNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})

export const startUploading = (file) =>{
    return async ( dispatch, getState ) =>{
        const activeNote = getState().notes.active;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () =>{
                Swal.showLoading();
            }
        });
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch( startSaveNote(activeNote));
        Swal.close();
    }
}

export const startDeleting = ( id ) =>{
    return async ( dispatch, getState ) =>{
        const uid = getState().auth.uid;
        await db.doc(`${ uid }/journal/notes/${ id }`).delete();
        dispatch(DeleteNote(id));
    }
}

export const DeleteNote = (id) =>({
    type: types.notesDelete,
    payload: id
})

export const noteLogout = () =>({
    type: types.notesLogoutCleaning
})