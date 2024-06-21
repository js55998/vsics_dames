import React from 'react';
import './InValid.css'

const PercentageStat = ({ label, total, score }) => {
    return (
        <div className="pricetab">
            <h1>{label}</h1>
            <div className="price">
                <h2> {Math.round(score / total * 100)}% </h2>
            </div>
        </div>
    )
}

const InValidProps = ({}) => {
    return (
        <div>
            <h1>Male Population</h1>
            <div>
                <PercentageStat label="Class 1" total={360} score={203} />
                <PercentageStat label="Class 2" total={206} />
                <PercentageStat label="Class 3" score={107} />
                <PercentageStat label="Class 4" />
            </div>
            <div>
                <PercentageStat label="Class 1" total={0} score={203} />
                <PercentageStat label="Class 2" total={0} />
                <PercentageStat label="Class 3" score={f => f} />
                <PercentageStat label="Class 4" total={{}} score="0" />
            </div>
        </div>
    )

}

export default InValidProps