import React from "react";
import {FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';


const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        <FormattedNumber value={props.offer.salary} />
        <FormattedPlural value={props.offer.salary} one={<FormattedMessage id="Singular"/>} other={<FormattedMessage id="Plural"/>} />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.visites}
        />
      </td>
    </tr>
  );
};

export default Job;
