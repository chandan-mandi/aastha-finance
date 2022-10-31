
import React from 'react';
import LastWeekSalesBarChart from '../Charts/LastWeekSalesBarChart';
import MonthlyBarChart from '../Charts/MonthlyBarChart';
import MonthlySalesLineChart from '../Charts/MonthlySalesLineChart';
import TodaySalesAreaChart from '../Charts/TodaySalesAreaChart';

const HomeDashboard = () => {
    const admin = true;
    return (
        <div className='card-dividing'>
            {/* cards */}
            <div className="griding">
                <div className="cardBox">
                    {admin && <>
                        <div className="dash-card">
                            <div className="iconBx">
                                <i class="fa-solid fa-money-bill-1"></i>
                            </div>
                            <div>
                                <div className="numbers">12,32,342</div>
                                <div className="cardName">TOTAL SALES</div>
                            </div>
                        </div>
                        <div className="dash-card">
                            <div className="iconBx">
                                <i class="fa-solid fa-chart-line"></i>
                            </div>
                            <div>
                                <div className="numbers">12,12,342</div>
                                <div className="cardName">TOTAL EXPENSES</div>
                            </div>
                        </div>
                        <div className="dash-card">
                            <div className="iconBx">
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                            </div>
                            <div>
                                <div className="numbers">12,32,342</div>
                                <div className="cardName">TOTAL REVENUE</div>
                            </div>
                        </div>
                    </>}
                </div>
                <div className="graphBox">
                    <div className="chartBox">
                        {/* <BarCharts /> */}
                        <MonthlyBarChart />
                    </div>
                </div>
            </div>
            <div className='sales-analytics griding'>
                {/* <h6>SALES ANALYTICS</h6> */}
                {/* Monthly sales area chart  */}
                <div className="chart-title">
                    <h6>This month sales</h6>
                    <p>Details</p>
                </div>
                <div className="graphBox">
                    <MonthlySalesLineChart />
                </div>
                {/* Todays sales area chart  */}
                <div className="chart-title">
                    <h6>Todays sale</h6>
                    <p>Details</p>
                </div>
                <div className="graphBox">
                    <TodaySalesAreaChart />
                </div>
                {/* Last week sales chart  */}
                <div className="chart-title">
                    <h6>Last Week sales</h6>
                    <p>Details</p>
                </div>
                <div className="graphBox">
                    <LastWeekSalesBarChart />
                </div>
            </div>
        </div>
    );
};

export default HomeDashboard;