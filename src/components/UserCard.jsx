const UserCard = ({
  company,
  name,
  phone,
  address,
  website,
  email,
  setDetails,
  showDetails,
}) => {
  return (
    <div className='card'>
      <div className='container'>
        <div>{company.name}</div>
        <div>
          <h3 className='card-subtitle'>CONTACT</h3>
          <p>{name}</p>
        </div>
        <div>
          <h3 className='card-subtitle'>CITY</h3>
          <p>{address.city}</p>
        </div>
        <div>
          <h3 className='card-subtitle'>ZIPCODE</h3>
          <p>{address.zipcode}</p>
        </div>

        <div
          role='button'
          className='card-btn'
          onClick={() => setDetails(!showDetails)}>
          view details
        </div>
      </div>
      {showDetails && (
        <div className='card-details'>
          <div>
            <h4>Description</h4>
            <p>{company.name + " " + company.catchPhrase}</p>
          </div>
          <div className='card-details-list'>
            <ul>
              <li>
                <h4>Contact Person</h4>
                <p>{name}</p>
              </li>
              <li>
                <h4>Website</h4>
                <p>{website}</p>
              </li>
              <li>
                <h4>Email</h4>
                <p>{email}</p>
              </li>
              <li>
                <h4>Phone</h4>
                <p>{phone}</p>
              </li>
            </ul>

            <ul>
              <li>
                <h4>Address</h4>
                <p>
                  {address.street + " " + address.suite + " " + address.city}
                </p>
              </li>
              <li>
                <h4>City</h4>
                <p>{address.city}</p>
              </li>
              <li>
                <h4>Zipcode</h4>
                <p>{address.zipcode}</p>
              </li>
              <li>
                <h4>Geo</h4>
                <p>{address.geo.lat + address.geo.lng}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
