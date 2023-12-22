import axios from 'axios';

export const getPlayerData = async(managerId) => {
	try {
    // Define the GraphQL query in the request body
    const requestBody = {
      query: `
        {
          entry(id: ${managerId}) {
            id
            name
            player_first_name
            player_last_name
            last_deadline_total_transfers
            started_event
          }

          entryHistory(id: ${managerId}) {
            current {
              total_points
              event_transfers_cost
              overall_rank
              event_transfers
              points
              rank
              bank
              value
            }
            chips {
              name
              event
            }
            past {
              season_name
              total_points
              rank
            }
          }

          picks(entry: ${managerId}, event: 18) {
            active_chip
            entry_history {
              event_transfers
              event_transfers_cost
            }
            picks {
              player {
                id
                web_name
              }
              position
              multiplier
              original_multiplier
              is_captain
              is_vice_captain
            }
          }

          entryTransfers(entry: ${managerId}, event: 18) {
            transfer {
              element_in {
                web_name
                id
              }
              element_out {
                web_name
                id
              }
            }
          }

          entryNetTransferPoints(entry: ${managerId}, event: 18) {
            netTransferPoints
          }
        }
      `,
    };

		const apiUrl = 'https://apin.livefpltables.com/';
    // Make a POST request to the specified API endpoint
    const response = await axios.post(apiUrl, requestBody);

    // Extract relevant data from the API response
    const responseData = response.data;

    // Send the data as the response
    return responseData;
  } catch (error) {
    // Handle errors
    console.error('Error making POST request:', error.message);

    // Send an error response with a 500 status code
    return 'Internal Server Error';
  }
}