import React from 'react';
import './workoutList.css'
import {useSelector} from "react-redux";
import workout from "./workout/Workout";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const WorkoutList = () => {

    const workouts = useSelector(state => state.workouts.workouts)
    const workoutView = useSelector(state => state.workouts.view)

    if (workouts.length === 0) {
        return (
            <div className='loader'>Тренировки не найдены</div>
        )
    }

    if (workoutView === "plate") {
        return (
            <div className='workoutplate'>
                {workouts.map(workout =>
                    <workout key={workout._id} workout={workout}/>
                )}
            </div>
        )
    }

    if (workoutView === 'list') {
        return (
            <div className='workoutlist'>
                <div className="workoutlist__header">
                    <div className="workoutlist__name">Название</div>
                    <div className="workoutlist__date">Дата</div>
                    <div className="workoutlist__size">Размер</div>
                </div>
                <TransitionGroup>
                    {workouts.map(workout =>
                        <CSSTransition
                            key={workout._id}
                            timeout={500}
                            classNames={'workout'}
                            exit={false}
                        >
                            <workout workout={workout}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        );
    }

};

export default WorkoutList;
