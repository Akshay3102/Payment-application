import { useState } from "react";
import styles from "./BusinessLoan.module.css";

import { FaUser, FaChevronDown, FaSearch } from "react-icons/fa";
import { TbUserCheck, TbUserCancel } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { RiSortDesc } from "react-icons/ri";

import StatCard from "../../components/StatCard/StatCard";
import LeadCard from "../../components/LeadCard/LeadCard";
import LeadModal from "../../components/LeadModal/LeadModal";
import PurchaseSuccessModal from "../../components/PurchasSuccessModal/PurchaseSuccessModal";

const BusinessLoan = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(7);
  const [selectedLead, setSelectedLead] = useState(null);
  const [showPurchaseSuccess, setShowPurchaseSuccess] = useState(false);

  const leads = [
    {
      id: "Lead #123",
      amount: "5,000,000",
      status: "New",
      statusClass: "new",
    },
    {
      id: "Lead #124",
      amount: "3,500,000",
      status: "In Discussion",
      statusClass: "discussion",
    },
    {
      id: "Lead #125",
      amount: "7,000,000",
      status: "Purchased",
      statusClass: "purchased",
    },
    {
      id: "Lead #126",
      amount: "2,000,000",
      status: "Ready to Close",
      statusClass: "ready",
    },
  ];

  const totalPages = Math.ceil(leads.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedLeads = leads.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page) => {
    if (page === "...") return;
    setCurrentPage(page);
  };

  const goFirst = () => setCurrentPage(1);

  const goPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goLast = () => setCurrentPage(totalPages);

  const getVisiblePages = () => {
    const pages = [];

    if (currentPage > 2) pages.push(1);

    if (currentPage > 3) pages.push("...");

    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (currentPage < totalPages - 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Business Loan</h1>

        <p>Browse and evaluate high quality leads</p>
      </div>

      <div className={styles.cards}>
        <StatCard
          icon={<FaUser />}
          count="10"
          title="Total Leads"
          variant="blue"
        />

        <StatCard
          icon={<TbUserCheck />}
          count="2"
          title="Approved Leads"
          variant="green"
        />

        <StatCard
          icon={<TbUserCancel />}
          count="2"
          title="Pending Leads"
          variant="orange"
        />

        <StatCard
          icon={<BsStars />}
          count="4"
          title="New Leads"
          variant="violet"
        />
      </div>

      <div className={styles.filters}>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />

          <input type="text" placeholder="Search leads..." />
        </div>

        <div className={styles.filterItem}>
          <span>Lead Status</span>
          <FaChevronDown />
        </div>

        <div className={styles.filterItem}>
          <span>Lead Type</span>
          <FaChevronDown />
        </div>

        <div className={styles.filterItem}>
          <span>Location</span>
          <FaChevronDown />
        </div>

        <div className={styles.filterItem}>
          <RiSortDesc />
          <span>Sort By</span>
          <FaChevronDown />
        </div>
      </div>

      <div className={styles.leadGrid}>
        {paginatedLeads.map((lead) => (
          <LeadCard
            key={lead.id}
            lead={lead}
            onView={() => setSelectedLead(lead)}
          />
        ))}
      </div>

      <div className={styles.pagination}>
        <div className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </div>

        <div className={styles.pageNumbers}>
          <span onClick={goFirst}>{"<<"}</span>

          <span onClick={goPrevious}>{"<"}</span>

          {getVisiblePages().map((page, index) => (
            <span
              key={index}
              onClick={() => handlePageChange(page)}
              className={page === currentPage ? styles.activePage : ""}
            >
              {page}
            </span>
          ))}

          <span onClick={goNext}>{">"}</span>

          <span onClick={goLast}>{">>"}</span>
        </div>

        <div className={styles.pageSize}>
          {pageSize} / page
          <FaChevronDown />
        </div>
      </div>
      {selectedLead && (
        <LeadModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
          onPurchase={() => {
            setSelectedLead(null);
            setShowPurchaseSuccess(true);
          }}
        />
      )}
      {showPurchaseSuccess && (
        <PurchaseSuccessModal onClose={() => setShowPurchaseSuccess(false)} />
      )}
    </div>
  );
};

export default BusinessLoan;
