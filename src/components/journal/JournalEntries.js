import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
    const {notes} = useSelector(state => state.notes);
    // const entries =[1,2,3,4,5];
  return (
    <div 
      className="journal__entries"
    >
        {
            // entries.map(number =>
            //     <JournalEntry key={number.toString()} />
            // )
            notes.map( note =>
              <JournalEntry key={note.id} { ...note } />
          )
        }
    </div>
  )
}