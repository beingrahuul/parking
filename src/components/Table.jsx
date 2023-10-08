import styled from "styled-components"


const TableContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  color: #D8D9DA;
  display: flex;
  align-items: center;
  justify-content: center;

`

const TableComp = styled.table`
  width: 96%;
  border-collapse: collapse;
  border-radius: 5%;
  padding: 1rem;
  & th {
    color: #fff;
    padding: 1rem;
    border-bottom: 1px solid #000000;
    text-align: center;
  }
  & td {
    padding: 0.5rem;
    text-align: center;
  }
  & tr {
    background-color: #ffffffa9;
    border-bottom: 1px solid #000000;
    color: black;
  }

`

const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & p {
    margin: 0;
    padding: 0;
  }
  & p:first-child {
    font-size: 1rem;
  }
  & p:last-child {
    font-size: 0.6rem;
    opacity: 0.5;
  }

`

function Table() {


  return (
    <TableContainer>
      <TableComp>
        <th>Time</th>
        <th>Name</th>
        <th>Car Registration Number</th>
        <th>Payment</th>
        <tr>
          <td>
            <TimeContainer>
              <p>8 Nov 2023</p>
              <p>4:30 PM</p>
            </TimeContainer>
          </td>
          <td>Rahul Kumar</td>
          <td>DL9CS9965</td>
          <td>Paid</td>
        </tr>

        <tr>
          <td>
            <TimeContainer>
              <p>7 Nov 2023</p>
              <p>4:30 PM</p>
            </TimeContainer>
          </td>

          <td>Beingrahuul</td>
          <td>DL9CS9965</td>
          <td>Pending</td>
        </tr>

        <tr>
          <td>
            <TimeContainer>
              <p>7 Nov 2023</p>
              <p>4:30 PM</p>
            </TimeContainer>
          </td>

          <td>Beingrahuul</td>
          <td>DL9CS9965</td>
          <td>Pending</td>
        </tr>

        <tr>
          <td>
            <TimeContainer>
              <p>7 Nov 2023</p>
              <p>4:30 PM</p>
            </TimeContainer>
          </td>

          <td>Beingrahuul</td>
          <td>DL9CS9965</td>
          <td>Pending</td>
        </tr>

        <tr>
          <td>
            <TimeContainer>
              <p>7 Nov 2023</p>
              <p>4:30 PM</p>
            </TimeContainer>
          </td>

          <td>Beingrahuul</td>
          <td>DL9CS9965</td>
          <td>Pending</td>
        </tr>

        <tr>
          <td>
            <TimeContainer>
              <p>7 Nov 2023</p>
              <p>4:30 PM</p>
            </TimeContainer>
          </td>

          <td>Beingrahuul</td>
          <td>DL9CS9965</td>
          <td>Pending</td>
        </tr>

        <tr>
          <td>
            <TimeContainer>
              <p>7 Nov 2023</p>
              <p>4:30 PM</p>
            </TimeContainer>
          </td>

          <td>Beingrahuul</td>
          <td>DL9CS9965</td>
          <td>Pending</td>
        </tr>

        <tr>
          <td>
            <TimeContainer>
              <p>7 Nov 2023</p>
              <p>4:30 PM</p>
            </TimeContainer>
          </td>

          <td>Beingrahuul</td>
          <td>DL9CS9965</td>
          <td>Pending</td>
        </tr>


        <tr>
          <td>
            <TimeContainer>
              <p>7 Nov 2023</p>
              <p>4:30 PM</p>
            </TimeContainer>
          </td>

          <td>Beingrahuul</td>
          <td>DL9CS9965</td>
          <td>Pending</td>
        </tr>

        <tr>
          <td>
            <TimeContainer>
              <p>7 Nov 2023</p>
              <p>4:30 PM</p>
            </TimeContainer>
          </td>

          <td>Beingrahuul</td>
          <td>DL9CS9965</td>
          <td>Pending</td>
        </tr>
      </TableComp>
    </TableContainer>
  )
}

export default Table