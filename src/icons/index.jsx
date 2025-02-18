export const FacebookTitle = (props) => {
  return (
    <svg
      width="230"
      height="50"
      viewBox="0 0 230 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // ทุก props ที่รับมาจะมาอยู่ที่นี่
    >
      <text
        x="10"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="#1877F2"
      >
        FaKebook
      </text>
    </svg>
  );
};


export function FacebookLogo(props) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fill="#1877F2"
        d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
      />
      <path
        fill="#fff"
        d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
      />
    </svg>
  )
}


export function SearchIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.796 15.811L21 21m-3-10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HomeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <path
          d="M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11"
          strokeLinecap="round"
        />
        <path
          opacity={0.5}
          d="M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5"
          strokeLinecap="round"
        />
        <path d="M4 22V9.5M20 22V9.5" strokeLinecap="round" />
        <path
          opacity={0.5}
          d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </g>
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.658 9.286c1.44.9 2.16 1.35 2.407 1.926a2 2 0 010 1.576c-.247.576-.967 1.026-2.407 1.926L9.896 18.94c-1.598.999-2.397 1.498-3.056 1.445a2 2 0 01-1.446-.801C5 19.053 5 18.111 5 16.226V7.774c0-1.885 0-2.827.394-3.358a2 2 0 011.446-.801c.66-.053 1.458.446 3.056 1.445l6.762 4.226z"
        stroke="#000"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MarketIcon(props) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21.617 9.088l-1.429-5A1.507 1.507 0 0018.746 3H5.254a1.507 1.507 0 00-1.442 1.088l-1.429 5A1.5 1.5 0 003.826 11H4v7.5A2.503 2.503 0 006.5 21h11a2.503 2.503 0 002.5-2.5V11h.174a1.5 1.5 0 001.443-1.912zM19 18.5a1.502 1.502 0 01-1.5 1.5h-11A1.502 1.502 0 015 18.5V11h14zm1.574-8.699a.497.497 0 01-.4.199H3.826a.5.5 0 01-.48-.638l1.428-5A.501.501 0 015.254 4h13.492a.501.501 0 01.48.362l1.428 5a.496.496 0 01-.08.44z" />
    </svg>
  )
}

export function FriendIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={3}
      stroke="#000"
      fill="none"
      {...props}
    >
      <circle cx={22.83} cy={22.57} r={7.51} />
      <path d="M38 49.94a15.2 15.2 0 00-15.21-15.2h0a15.2 15.2 0 00-15.2 15.2z" />
      <circle cx={44.13} cy={27.22} r={6.05} />
      <path d="M42.4 49.94h14A12.24 12.24 0 0044.13 37.7h0a12.21 12.21 0 00-5.75 1.43" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function MessengerIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.002 2C6.369 2 2 6.126 2 11.701c0 2.916 1.195 5.435 3.14 7.174.162.146.26.349.268.57l.056 1.78a.798.798 0 001.121.705l1.986-.875a.81.81 0 01.533-.04c.912.25 1.883.386 2.894.386C17.631 21.4 22 17.275 22 11.7 22 6.125 17.632 2 12.002 2zm5.25 7.579L14.75 13.55a1.279 1.279 0 01-1.85.342l-1.992-1.493a.513.513 0 00-.615 0l-2.688 2.04c-.357.273-.828-.157-.589-.536L9.52 9.932a1.28 1.28 0 011.85-.342l1.992 1.493a.514.514 0 00.614 0l2.688-2.04c.36-.277.832.153.589.536z"
        stroke="#000"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function NotificationIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.313 12.463C6.2 9.293 8.61 6.625 11.701 6.5c3.091.125 5.501 2.792 5.388 5.963 0 1.317 1.395 2.6 1.436 3.92v.056c.03.846-.613 1.557-1.437 1.59h-3.112a2.583 2.583 0 01-.666 1.747 2.162 2.162 0 01-1.609.724 2.162 2.162 0 01-1.609-.724 2.582 2.582 0 01-.666-1.747H6.313c-.824-.033-1.467-.744-1.437-1.59v-.056c.042-1.316 1.437-2.602 1.437-3.92z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.426 17.279a.75.75 0 000 1.5v-1.5zm4.55 1.5a.75.75 0 000-1.5v1.5zm-1.3-13.529a.75.75 0 000-1.5v1.5zm-1.95-1.5a.75.75 0 000 1.5v-1.5zm-1.3 15.029h4.55v-1.5h-4.55v1.5zm3.25-15.029h-1.95v1.5h1.95v-1.5z"
        fill="#000"
      />
    </svg>
  )
}

export function DropdownArrow(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
        fill="#000"
      />
    </svg>
  )
}