import {
  AIRTABLE_TABLE_NAME,
  AIRTABLE_BASE_ID,
  AIRTABLE_API_KEY,
} from './configuration.jsx';

const tableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

const defaultHeaders = {
  Authorization: `Bearer ${AIRTABLE_API_KEY}`,
};

export const listRecords = async options => {
  try {
    let params = {};
    if (options?.searchText) {
      params = {
        ...params,
        filterByFormula: `SEARCH('${options.searchText.toLowerCase()}', {title})`,
      };
    }
    const response = await fetch(tableUrl + '?' + new URLSearchParams(params), {
      headers: { ...defaultHeaders },
      method: 'GET',
    });

    if (!response.ok) {
      throw 'Response not OK!';
    }

    const data = await response.json();

    const records = data.records.map(record => ({
      title: record.fields.title,
      id: record.id,
    }));

    return records;
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

    if (!response.ok) {
      console.log(response);
      throw 'Response not OK!';
    }

    const data = await response.json();

    const newRecords = data.records.map(record => ({
      title: record.fields.title,
      id: record.id,
    }));

    return newRecords;
  } catch (error) {
    console.log(error);
  }
};
