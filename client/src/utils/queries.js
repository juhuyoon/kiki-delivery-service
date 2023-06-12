import { gql } from '@apollo/client';

export const VIEW_KITTIES = gql`
    query seeAllKitties {
        viewKitties {
        _id
        name
        age
        breed
        color
        declawed
        gender
        trauma
        }
    }
`