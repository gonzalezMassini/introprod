import React from 'react';
import styles from './Scheduler.module.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const Scheduler = () => {
    // const localData = {
    //     dataSource: [
    //         {
    //             EndTime: new Date(2021, 0, 11, 6, 30),
    //             StartTime: new Date(2021, 0, 11, 4, 0),
    //         },
    //     ],
    // };
    // const remoteData = new DataManager({
    //     url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    //     adaptor: new WebApiAdaptor(),
    //     crossDomain: true,
    // });
    return (
        <div className={styles.container}>
            <ScheduleComponent currentView='Month'>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    );
};

export default Scheduler;
