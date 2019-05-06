import React from 'react';
export default function SideBarLeft() {
  return <div className="side-bar-left">
    <ul>
      <li className="li-link">
        <a className="base-link" href="/">
          Create Hero
        </a>
      </li>
      <li className="li-link">
        <a className="base-link" href="/">
          Call a Hero
        </a>
      </li>
      <li className="li-link">
        <a className="base-link" href="/">
          Call Avengers
        </a>
      </li>
      <li className="li-link">
        <a className="base-link" href="/">
          Manage Avengers Location
        </a>
      </li>
    </ul>
  </div>
}