import {
  AIRTABLE_TABLE_NAME,
  AIRTABLE_BASE_ID,
  AIRTABLE_API_KEY,
} from './configuration.jsx';

const tableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

const defaultHeaders = {
  Authorization: `Bearer ${AIRTABLE_API_KEY}`,
};

const handleResponse = async response => {
  if (!response.ok) {
    throw 'Response not OK!';
  }

  const data = await response.json();

  if (data.records) {
    const records = data.records.map(record => ({
      title: record.fields.title,
      id: record.id,
    }));

    return records;
  }
};

export const listRecords = async options => {
  try {
    let params = {};

    // search with text
    if (options?.searchText) {
      params = {
        ...params,
        filterByFormula: `SEARCH('${options.searchText.toLowerCase()}', {title})`,
      };
    }

    // sort by title
    params = {
      ...params,
      'sort[0][field]': 'title',
      'sort[0][direction]': 'desc',
    };

    const response = await fetch(tableUrl + '?' + new URLSearchParams(params), {
      headers: { ...defaultHeaders },
      method: 'GET',
    });

    return handleResponse(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecord = async recordToDelete => {
  try {
    const response = await fetch(`${tableUrl}/${recordToDelete.id}`, {
      headers: {
        ...defaultHeaders,
      },
      method: 'DELETE',
    });

    return handleResponse(response);
  } catch (error) {
    console.log(error);
  }
};

export const create = async newRecord => {
  try {
    const response = await fetch(tableUrl, {
      body: JSON.stringify({
        records: [
          {
            fields: { title: newRecord.title },
          },
        ],
      }),
      headers: {
        ...defaultHeaders,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    return handleResponse(response);
  } catch (error) {
    console.log(error);
  }
};
