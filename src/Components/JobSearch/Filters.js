import React from 'react';

const Filters = () => {
    return (
        <div className='my-10 px-16'>
            <div class="grid  laptopLg:grid-cols-5 laptopMd:grid-cols-4 laptopSm:grid-cols-3 mobileMd:grid-cols-2 gap-4">
              <div><select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Date posted</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select></div>
              <div><select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Duration</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select></div>
              <div><select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Job Type</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select></div>
              <div><select className="select select-bordered w-full max-w-xs">
  <option disabled selected>On-site/Remote</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select></div>
              <div><button className="btn btn-link font-semibold text-pumpkinOrange">More Filters</button></div>
        </div>
        </div>
    );
};

export default Filters;