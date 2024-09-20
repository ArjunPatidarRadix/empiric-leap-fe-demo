// Dashboard.tsx
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Widget } from "./Widget";

export const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-900">
        <Header />

        <div className="p-6 grid grid-cols-3 gap-6">
          {/* Budget Widget */}
          <Widget
            title="Budget"
            content={
              <div>
                <p>Chart Goes Here</p>
              </div>
            }
          />

          {/* Schedule Widget */}
          <Widget
            title="Schedule"
            content={
              <div>
                <p>Original: xx Days</p>
                <p>Actual: xx Days</p>
                <p>Difference: xx Days</p>
              </div>
            }
          />

          {/* Safety Widget */}
          <Widget
            title="Safety"
            content={
              <div>
                <p>Manhours: xxx</p>
                <p>Recordables: xxx</p>
                <p>Near Misses: xxx</p>
              </div>
            }
          />

          {/* RFIs Widget */}
          <Widget
            title="RFIs"
            content={
              <div>
                <p>Qty: xx</p>
                <p>Turn Time: xx</p>
              </div>
            }
          />

          {/* Change Orders Widget */}
          <Widget
            title="Change Orders"
            content={
              <div>
                <p>Qty: xx</p>
                <p>Turn Time: xx</p>
              </div>
            }
          />

          {/* Team Experience Widget */}
          <Widget
            title="Team Experience"
            content={
              <div>
                <p>Rating: ★★★★☆</p>
                <p>"I learned so much on this project..."</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
