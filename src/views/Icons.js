/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// reactstrap components

function Icons() {
  return (
    <>
        <div className="content">
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={[
                    { title: '15 min meeting with Sara about How to determine CI Engine combustion Characteristics through simulation?', date: '2022-01-06' },
                    { title: '15 min meeting with Lee about When should you use a t-test vs a z-test?', date: '2022-01-16' }
                ]}
            />
        </div>
    </>
  );
}

export default Icons;
