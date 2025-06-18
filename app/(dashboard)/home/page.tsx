"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import localData from "@/localData";
import { ButtonDemo, InputDemo } from "@/components/index";

const { starIcon, databaseIcon, receiptLongIcon, handshakeIcon } = localData.images;
const {
  expandIcon,
  codeAccountIcon,
  barChartIcon,
  callLogIcon,
  mistIcon,
  sendIcon,
  acuteIcon,
  candlestickIcon,
  dragIndicatorIcon,
  arrowRightIcon,
} = localData.svgs;

const Home = () => {
  return (
    <div className="min-h-[100vh] px-5 mb-[100px]">
      <div className="grid grid-cols-[2.5fr_1fr] gap-[24px]">
        <Card className="shadow-none bg-custom-lightblue rounded-sm py-3 gap-0 justify-between">
          <CardHeader className="flex justify-between gap-10 px-3">
            <div className="flex gap-3 items-center">
              <div>
                <img src={starIcon} alt="" />
              </div>
              <div>
                <CardTitle className=" text-[16px] 4xl:text-[20px] font-medium font-krona-one">AMY</CardTitle>
                <CardDescription className="text-[11px]  4xl:text-[16px]">
                  Get instant help with portfolio management, client queries, and market insights
                </CardDescription>
              </div>
            </div>
            <ButtonDemo icon={expandIcon} variant="ghost" color="gray" shape="circle" />
          </CardHeader>
          <CardContent className="px-3">
            <div className="chat">
              <div className="min-h-[250px] flex items-center">
                <div className="chat-log flex gap-[8px] flex-wrap  w-fit mx-auto items-center  ">
                  <ButtonDemo startIcon={codeAccountIcon} text="Fund-wise AUM & Deployment" color="white" />
                  <ButtonDemo startIcon={barChartIcon} text="NAV & IRR Performance" color="white" />
                  <ButtonDemo startIcon={callLogIcon} text="Upcoming Capital Calls" color="white" />
                  <ButtonDemo startIcon={mistIcon} text="Distributed Waterfall Summary" color="white" />
                </div>
              </div>
              <InputDemo
                placeholder="How would you like to start?"
                className=" mb-0"
                inputClassName="!text-[10px] 4xl:!text-[12px]  font-krona-one !placeholder-gray-400"
                name="search"
                type="text"
                defaultValue=""
                callback={(e) => console.log(e.target.value)}
                _size="lg"
                endIcon={<ButtonDemo startIcon={sendIcon} color="blue" className="" size="lg" />}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none rounded-sm p-0 gap-0">
          <CardHeader className="flex items-center justify-between gap-5  py-[7px] px-[7px] pl-6 bg-custom-lightblue">
            <div className="flex gap-2 items-center">
              <div className="svg-size-sm">{acuteIcon}</div>
              <CardTitle className=" text-[14px] 4xl:text-[18px] font-medium">Today’s Activity</CardTitle>
            </div>
            <div className="">
              <ButtonDemo className="" icon={dragIndicatorIcon} variant="ghost" color="gray" shape="circle" />
            </div>
          </CardHeader>
          <CardContent className="px-3 py-3">
            <div className="activity-card card  p-3 rounded-lg hover:bg-neutral-50">
              <h4 className="card-title text-sm font-bold mb-3 flex items-center">
                <div className="w-[5px] h-[5px] bg-destructive rounded-full mr-1"></div>Upcoming Capital Call
              </h4>
              <p className="card-description text-secondary text-xs mb-3">
                ₹2.5 Cr due from investors in Fund Gamma by June 5
              </p>
              <div className="card-date text-custom-blue text-xs font-medium">Tomorrow; 5:00 PM</div>
            </div>

            <div className="activity-card card  p-3 rounded-lg hover:bg-neutral-50">
              <h4 className="card-title text-sm font-bold mb-3 flex items-center">
                <div className="w-[5px] h-[5px] bg-yellow-500 rounded-full mr-1"></div>NAV Update Alert
              </h4>
              <p className="card-description text-secondary text-xs mb-3">
                Fund III valuation cycle due. Review third-party reports
              </p>
              <div className="card-date text-custom-blue text-xs font-medium">Tomorrow; 5:00 PM</div>
            </div>

            <div className="activity-card card  p-3 rounded-lg hover:bg-neutral-50">
              <h4 className="card-title text-sm font-bold mb-3 flex items-center">
                <div className="w-[5px] h-[5px] bg-yellow-500 rounded-full mr-1"></div>Distribution Payout
              </h4>
              <p className="card-description text-secondary text-xs mb-3">
                Fund I ready to initiate ₹4.5 Cr distribution. Review waterfall and LP splits
              </p>
              <div className="card-date text-custom-blue text-xs font-medium">Process Maturity</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none rounded-sm p-0 gap-0">
          <CardHeader className="flex items-center justify-between gap-5  py-[7px] px-[7px] pl-6 bg-custom-lightblue">
            <div className="flex gap-2 items-center">
              <div className="svg-size-sm svg-size-xs">{candlestickIcon}</div>
              <CardTitle className=" text-[14px] 4xl:text-[18px] font-medium">Key Metrics</CardTitle>
            </div>
            <div className="">
              <ButtonDemo className="" icon={dragIndicatorIcon} variant="ghost" color="gray" shape="circle" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col 2xl:flex-row gap-3 gap-x-10 py-3 px-3">
            <div className="flex flex-wrap gap-3 flex-1">
              <div className="liabilities flex-1 min-w-[170px]">
                <div className="card card-liabilities p-3 bg-gray-50 rounded-md">
                  <div className="card-header flex items-center gap-3 justify-between mb-4 ">
                    <div className="card-icon 4xl:max-w-[36px]">
                      <img className="w-[30px] h-[30px] object-contain" src={databaseIcon} alt="" />
                    </div>
                    <div className="bg-[rgb(0,128,0,.1)] text-custom-green text-xs rounded-[4px] py-[4px] px-[7px]">
                      12.3%
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-price text-[26px] font-bold mb-2">₹43.1 Cr.</h4>
                    <div className="card-details text-xs font-medium">Total AUM</div>
                  </div>
                </div>
              </div>

              <div className="liabilities flex-1 min-w-[170px]">
                <div className="card card-liabilities p-3 bg-gray-50 rounded-md">
                  <div className="card-header flex items-center gap-3 justify-between mb-4 ">
                    <div className="card-icon 4xl:max-w-[36px]">
                      <img className="w-[30px] h-[30px] object-contain" src={receiptLongIcon} alt="" />
                    </div>
                    <div className="bg-[rgb(0,128,0,.1)] text-custom-green text-xs rounded-[4px] py-[4px] px-[7px]">
                      12.3%
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-price text-[26px] font-bold mb-2">₹20.1 Cr.</h4>
                    <div className="card-details text-xs font-medium">Earning till date</div>
                  </div>
                </div>
              </div>

              <div className="liabilities flex-1 min-w-[170px]">
                <div className="card card-liabilities p-3 bg-gray-50 rounded-md">
                  <div className="card-header flex items-center gap-3 justify-between mb-4 ">
                    <div className="card-icon 4xl:max-w-[36px]">
                      <img className="w-[30px] h-[30px] object-contain" src={handshakeIcon} alt="" />
                    </div>
                    {arrowRightIcon}
                  </div>
                  <div className="card-body">
                    <h4 className="card-price text-[26px] font-bold mb-2">173</h4>
                    <div className="card-details text-xs font-medium">Active Clients</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-8">
                <div className="number font-bold text-[25px]">4</div>
                <div>
                  <div className="title text-sm font-medium">Redemptions</div>
                  <div className="text text-xs text-secondary">Partial exits completed</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="number font-bold text-[25px]">2</div>
                <div>
                  <div className="title text-sm font-medium">Drawdowns</div>
                  <div className="text text-xs text-secondary">Capital calls executed this month</div>
                </div>
              </div>
          
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
