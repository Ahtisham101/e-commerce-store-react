import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export function Cart() {
  return (
    <Box>
      <Typography>In your Cart</Typography>
      <table className="order-table">
        <tbody>
          <tr>
            <td>
              <img
                src="https://dl.dropboxusercontent.com/s/sim84r2xfedj99n/%24_32.JPG"
                alt="image"
                className="full-width"
              />
            </td>
            <td>
              <br />
              <span className="thin">Nike</span>
              <br /> Free Run 3.0 Women
              <br />
              <span className="thin small">
                Color: Grey/Orange, Size: 10.5
                <br />
                <br />
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="price">$99.95</div>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
}
