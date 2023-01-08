import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from '../../interfaces/entry';
import { useContext, useMemo } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';

interface Props {
    status: EntryStatus;
}

export const EntryList = ({ status }: Props) => {
    const { entries } = useContext(EntriesContext)

    const entriesByStatus = useMemo(() => {
        return entries.filter( entry => entry.status === status );
    }, [entries])

    return (
        <div>
            <Paper 
                // elevation={0} 
                sx={{ 
                    height: 'calc(100vh - 180px)', 
                    overflow: 'auto', 
                    backgroundColor: 'transparent', 
                    padding: '5px 10px',
                }}
            >

                <List sx={{ opacity: 1 }}>
                    { entriesByStatus.map( entry => (
                        <EntryCard key={entry._id} entry={entry} />
                    )) }
                </List>

            </Paper>
        </div>
    )
}
