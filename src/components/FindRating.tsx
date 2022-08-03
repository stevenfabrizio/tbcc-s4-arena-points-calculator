import React from 'react';

const FindRating: React.FC = () => {
  //the arena rating stored variables
  const [desiredPoints, setDesiredPoints] = React.useState(1200);
  const formula =
    (Math.round(1 / -0.00412) *
      Math.log((1022 / (desiredPoints - 580) - 1) / 123)) /
    Math.log(2.71828);

  return (
    <>
      <h2>Enter your desired points.</h2>

      <table>
        <tr>
          <th>Bracket</th>
          <th>Rating</th>
          <th>Points</th>
        </tr>
        <tbody>
          <tr>
            <td>2v2</td>
            <td>
              <code>
                {Math.round(
                  Math.round(
                    (1 / -0.00412) *
                      Math.log((1022 / (desiredPoints / 0.76 - 580) - 1) / 123)
                  ) / Math.log(2.71828)
                )}
              </code>
            </td>
            <td>
              <code></code>
            </td>
          </tr>
          <tr>
            <td>3v3</td>
            <td>
              <code>
                {Math.round(
                  Math.round(
                    (1 / -0.00412) *
                      Math.log((1022 / (desiredPoints / 0.88 - 580) - 1) / 123)
                  ) / Math.log(2.71828)
                )}
              </code>
            </td>
            <td>
              <code>
                <input
                  type="number"
                  min="150"
                  max="3500"
                  value={desiredPoints}
                  onChange={(e) => setDesiredPoints(parseInt(e.target.value))}
                />
              </code>
            </td>
          </tr>
          <tr>
            <td>5v5</td>
            <td>
              <code>
                {Math.round(
                  Math.round(
                    (1 / -0.00412) *
                      Math.log((1022 / (desiredPoints - 580) - 1) / 123)
                  ) / Math.log(2.71828)
                )}
              </code>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FindRating;
