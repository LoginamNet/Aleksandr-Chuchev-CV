import './top-bar.css';

type ComponentProps = {
  handleClose: (event: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGSVGElement>) => void;
};

function TopBar(props: ComponentProps) {
  return (
    <div className="top-bar">
      <h2 className="text-color-white">/contact me</h2>
      <div className="top-bar__arrows">
        <svg width="24" height="24" viewBox="0 0 32 32">
          <path
            d="M21.7074 16.7075L11.7074 26.7075C11.6145 26.8004 11.5042 26.8741 11.3828 26.9244C11.2614 26.9747 11.1313 27.0006 10.9999 27.0006C10.8686 27.0006 10.7384 26.9747 10.617 26.9244C10.4957 26.8741 10.3854 26.8004 10.2924 26.7075C10.1995 26.6146 10.1258 26.5043 10.0756 26.3829C10.0253 26.2615 9.99939 26.1314 9.99939 26C9.99939 25.8686 10.0253 25.7385 10.0756 25.6171C10.1258 25.4957 10.1995 25.3854 10.2924 25.2925L19.5862 16L10.2924 6.7075C10.1048 6.51986 9.99939 6.26536 9.99939 6C9.99939 5.73464 10.1048 5.48014 10.2924 5.2925C10.4801 5.10486 10.7346 4.99944 10.9999 4.99944C11.2653 4.99944 11.5198 5.10486 11.7074 5.2925L21.7074 15.2925C21.8004 15.3854 21.8742 15.4957 21.9245 15.6171C21.9748 15.7385 22.0007 15.8686 22.0007 16C22.0007 16.1314 21.9748 16.2615 21.9245 16.3829C21.8742 16.5043 21.8004 16.6146 21.7074 16.7075Z"
            fill="currentColor"
          />
        </svg>
        <svg width="24" height="24" viewBox="0 0 32 32">
          <path
            d="M21.7074 16.7075L11.7074 26.7075C11.6145 26.8004 11.5042 26.8741 11.3828 26.9244C11.2614 26.9747 11.1313 27.0006 10.9999 27.0006C10.8686 27.0006 10.7384 26.9747 10.617 26.9244C10.4957 26.8741 10.3854 26.8004 10.2924 26.7075C10.1995 26.6146 10.1258 26.5043 10.0756 26.3829C10.0253 26.2615 9.99939 26.1314 9.99939 26C9.99939 25.8686 10.0253 25.7385 10.0756 25.6171C10.1258 25.4957 10.1995 25.3854 10.2924 25.2925L19.5862 16L10.2924 6.7075C10.1048 6.51986 9.99939 6.26536 9.99939 6C9.99939 5.73464 10.1048 5.48014 10.2924 5.2925C10.4801 5.10486 10.7346 4.99944 10.9999 4.99944C11.2653 4.99944 11.5198 5.10486 11.7074 5.2925L21.7074 15.2925C21.8004 15.3854 21.8742 15.4957 21.9245 15.6171C21.9748 15.7385 22.0007 15.8686 22.0007 16C22.0007 16.1314 21.9748 16.2615 21.9245 16.3829C21.8742 16.5043 21.8004 16.6146 21.7074 16.7075Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="top-bar__adress-bar">
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M13 5.125H10.875V3.5C10.875 2.7375 10.5721 2.00624 10.0329 1.46707C9.49377 0.927901 8.7625 0.625 8 0.625C7.2375 0.625 6.50624 0.927901 5.96707 1.46707C5.4279 2.00624 5.125 2.7375 5.125 3.5V5.125H3C2.76794 5.125 2.54538 5.21719 2.38128 5.38128C2.21719 5.54538 2.125 5.76794 2.125 6V13C2.125 13.2321 2.21719 13.4546 2.38128 13.6187C2.54538 13.7828 2.76794 13.875 3 13.875H13C13.2321 13.875 13.4546 13.7828 13.6187 13.6187C13.7828 13.4546 13.875 13.2321 13.875 13V6C13.875 5.76794 13.7828 5.54538 13.6187 5.38128C13.4546 5.21719 13.2321 5.125 13 5.125ZM5.875 3.5C5.875 2.93641 6.09888 2.39591 6.4974 1.9974C6.89591 1.59888 7.43641 1.375 8 1.375C8.56359 1.375 9.10409 1.59888 9.5026 1.9974C9.90112 2.39591 10.125 2.93641 10.125 3.5V5.125H5.875V3.5ZM13.125 13C13.125 13.0332 13.1118 13.0649 13.0884 13.0884C13.0649 13.1118 13.0332 13.125 13 13.125H3C2.96685 13.125 2.93505 13.1118 2.91161 13.0884C2.88817 13.0649 2.875 13.0332 2.875 13V6C2.875 5.96685 2.88817 5.93505 2.91161 5.91161C2.93505 5.88817 2.96685 5.875 3 5.875H13C13.0332 5.875 13.0649 5.88817 13.0884 5.91161C13.1118 5.93505 13.125 5.96685 13.125 6V13Z"
            fill="currentColor"
          />
        </svg>
        <span className="adress-bar__link adress-bar-text text-color-white">
          aleksandr-chuchev-cv.netlify.app/#contacts
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M14.875 3.5V6.5C14.875 6.59945 14.8355 6.69484 14.7651 6.76516C14.6948 6.83549 14.5994 6.875 14.5 6.875H11.5C11.4005 6.875 11.3051 6.83549 11.2348 6.76516C11.1645 6.69484 11.125 6.59945 11.125 6.5C11.125 6.40054 11.1645 6.30516 11.2348 6.23483C11.3051 6.16451 11.4005 6.125 11.5 6.125H13.5343L11.6356 4.3875C11.6318 4.38375 11.6281 4.37937 11.6237 4.37562C10.9113 3.66364 10.0049 3.17735 9.01774 2.9775C8.03057 2.77766 7.0064 2.87312 6.07316 3.25196C5.13993 3.6308 4.33901 4.27622 3.77046 5.10761C3.20191 5.93899 2.89094 6.91947 2.87639 7.92656C2.86184 8.93365 3.14435 9.9227 3.68864 10.7702C4.23293 11.6176 5.01487 12.2859 5.93676 12.6916C6.85866 13.0972 7.87965 13.2222 8.87218 13.051C9.86471 12.8798 10.7848 12.4199 11.5175 11.7287C11.5898 11.6605 11.6863 11.6237 11.7858 11.6266C11.8852 11.6294 11.9795 11.6717 12.0478 11.7441C12.1161 11.8164 12.1528 11.9129 12.15 12.0124C12.1471 12.1118 12.1048 12.2061 12.0325 12.2744C10.9436 13.3058 9.49977 13.8789 7.99997 13.875H7.91997C6.95794 13.8615 6.01396 13.6118 5.17098 13.1481C4.32799 12.6844 3.61179 12.0207 3.08532 11.2154C2.55884 10.4101 2.23819 9.48784 2.15156 8.52962C2.06492 7.57141 2.21493 6.60658 2.58843 5.71992C2.96192 4.83325 3.54746 4.05188 4.2936 3.44446C5.03973 2.83704 5.92363 2.42216 6.86762 2.23627C7.81162 2.05039 8.78682 2.09919 9.70754 2.37838C10.6283 2.65758 11.4663 3.15862 12.1481 3.8375L14.125 5.64687V3.5C14.125 3.40054 14.1645 3.30516 14.2348 3.23483C14.3051 3.16451 14.4005 3.125 14.5 3.125C14.5994 3.125 14.6948 3.16451 14.7651 3.23483C14.8355 3.30516 14.875 3.40054 14.875 3.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <svg
        className="top-bar__close__button"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        onClick={props.handleClose}
      >
        <path
          d="M25.3538 24.6463C25.4476 24.7401 25.5003 24.8673 25.5003 25C25.5003 25.1327 25.4476 25.2599 25.3538 25.3538C25.26 25.4476 25.1327 25.5003 25 25.5003C24.8674 25.5003 24.7401 25.4476 24.6463 25.3538L16 16.7075L7.35378 25.3538C7.25996 25.4476 7.13272 25.5003 7.00003 25.5003C6.86735 25.5003 6.7401 25.4476 6.64628 25.3538C6.55246 25.2599 6.49976 25.1327 6.49976 25C6.49976 24.8673 6.55246 24.7401 6.64628 24.6463L15.2925 16L6.64628 7.35375C6.55246 7.25993 6.49976 7.13269 6.49976 7C6.49976 6.86732 6.55246 6.74007 6.64628 6.64625C6.7401 6.55243 6.86735 6.49973 7.00003 6.49973C7.13272 6.49973 7.25996 6.55243 7.35378 6.64625L16 15.2925L24.6463 6.64625C24.6927 6.5998 24.7479 6.56295 24.8086 6.53781C24.8693 6.51267 24.9343 6.49973 25 6.49973C25.0657 6.49973 25.1308 6.51267 25.1915 6.53781C25.2522 6.56295 25.3073 6.5998 25.3538 6.64625C25.4002 6.69271 25.4371 6.74786 25.4622 6.80856C25.4874 6.86925 25.5003 6.93431 25.5003 7C25.5003 7.0657 25.4874 7.13076 25.4622 7.19145C25.4371 7.25215 25.4002 7.3073 25.3538 7.35375L16.7075 16L25.3538 24.6463Z"
          fill={'currentColor'}
        />
      </svg>
    </div>
  );
}

export default TopBar;
