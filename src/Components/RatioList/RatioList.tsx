import React from "react";
import styles from "./RatioList.module.css";

interface Props {
  data: any;
  config: any;
}

const RatioList: React.FC<Props> = ({ data, config }: Props): JSX.Element => {
  const renderedRows = config.map((row: any) => {
    return (
      <li className="py-3 sm:py-4" key={row.label}>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{row.label}</p>
            <p className="text-sm text-gray-500 truncate">{row.subtitle && row.subtitle}</p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900">{row.render(data)}</div>
        </div>
      </li>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 h-full">
      <ul className="divide-y divide-gray-200">{renderedRows}</ul>
    </div>
  );
};

export default RatioList;
