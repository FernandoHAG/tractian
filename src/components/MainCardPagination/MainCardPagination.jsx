import React, { useState, useEffect } from "react";
import { Row, Col, Pagination } from "antd";
import "./MainCardPagination.css";

function MainCardPagination(props) {
  const { cards } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12); // 6 cards per page
  const rowCount = 2; // 2 rows of cards

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (window.innerWidth < 2170) setPageSize(10);
    if (window.innerWidth < 1827) setPageSize(8);
    if (window.innerWidth < 1484) setPageSize(4);
    if (window.innerWidth < 900) setPageSize(2);
  }, []);

  const startCardIndex = (currentPage - 1) * pageSize;
  const endCardIndex = currentPage * pageSize;
  const currentCards = cards.slice(startCardIndex, endCardIndex);
  const totalPageCount = Math.ceil(cards.length / pageSize);
  const totalRowCount = Math.ceil(cards.length / pageSize);

  return (
    <div>
      <div>
        {[...Array(rowCount)].map((actualRow, rowIndex) => {
          return (
            <Row key={rowIndex} gutter={[16, 16]}>
              {currentCards
                .slice(rowIndex * (pageSize / rowCount), (rowIndex + 1) * (pageSize / rowCount))
                .map((ExpecificCard, cardIndex) => {
                  return <Col key={cardIndex}>{ExpecificCard}</Col>;
                })}
            </Row>
          );
        })}
        {totalPageCount > 1 && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
            <Pagination current={currentPage} total={totalRowCount} pageSize={1} onChange={handlePageChange} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainCardPagination;
