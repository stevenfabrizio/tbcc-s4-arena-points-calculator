import React from 'react';

const FindPoints: React.FC = () => {
  //the arena rating stored variables
  const [rating2v2, setRating2v2] = React.useState(1500);
  const [rating3v3, setRating3v3] = React.useState(1500);
  const [rating5v5, setRating5v5] = React.useState(1500);

  return (
    <>
      <h2>Find your bracket and enter your rating.</h2>

      <table>
        {/* <thead>Arena Points Table</thead> */}
        <tr>
          <th>Bracket</th>
          <th>Rating</th>
          <th>Points</th>
        </tr>
        <tbody>
          <tr>
            <td>2v2</td>
            <td>
              <input
                type="number"
                min="150"
                max="3500"
                value={rating2v2}
                onChange={(e) => setRating2v2(parseInt(e.target.value))}
              />
            </td>
            <td>
              <code>
                {Math.round(
                  0.76 *
                    (1022 / (1 + 123 * 2.71828 ** (-0.00412 * rating2v2)) + 580)
                )}
              </code>
            </td>
          </tr>
          <tr>
            <td>3v3</td>
            <td>
              <input
                type="number"
                min="150"
                max="3500"
                value={rating3v3}
                onChange={(e) => setRating3v3(parseInt(e.target.value))}
              />
            </td>
            <td>
              <code>
                {Math.round(
                  0.88 *
                    (1022 / (1 + 123 * 2.71828 ** (-0.00412 * rating3v3)) + 580)
                )}
              </code>
            </td>
          </tr>
          <tr>
            <td>5v5</td>
            <td>
              <input
                type="number"
                min="150"
                max="3500"
                value={rating5v5}
                onChange={(e) => setRating5v5(parseInt(e.target.value))}
              />
            </td>
            <td>
              <code>
                {Math.round(
                  1022 / (1 + 123 * 2.71828 ** (-0.00412 * rating5v5)) + 580
                )}
              </code>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FindPoints;
