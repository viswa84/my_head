import Depth2Frame from "../components/Depth2Frame";
import Depth4Frame from "../components/Depth4Frame";
import Depth5Frame from "../components/Depth5Frame";
import AccountantBusinessPartnerFr from "../components/AccountantBusinessPartnerFr";
import HelpCenterCommunityDevelope from "../components/HelpCenterCommunityDevelope";
import PowerfulTools from "../components/PowerfulTools";
import "./GalileoDesign.css";

const GalileoDesign = () => {
  return (
    <div className="galileo-design">
      <main className="depth-0-frame-0">
        <Depth2Frame />
        <section className="powerful-features">
          <Depth4Frame />
          <div className="depth-4-frame-1">
            <div className="depth-5-frame-0">
              <div className="depth-6-frame-0">
                <h3 className="why-headtler">Why Headtler</h3>
              </div>
            </div>
          </div>
          <div className="depth-4-frame-2">
            <div className="depth-5-frame-01">
              <div className="depth-6-frame-01">
                <div className="depth-7-frame-0">
                  <img
                    className="frame-marketing-icon"
                    loading="eager"
                    alt=""
                    src="/vector--0-1.svg"
                  />
                  <div className="depth-8-frame-0" />
                </div>
              </div>
              <div className="depth-6-frame-1">
                <div className="depth-7-frame-01">
                  <div className="depth-8-frame-01">
                    <b className="manage-your-books">Manage your books</b>
                  </div>
                </div>
                <div className="depth-7-frame-1">
                  <div className="depth-8-frame-02">
                    <div className="get-real-time-reports">
                      Get real-time reports on your income, expenses, and
                      profit. Plus, you can automate your bookkeeping by
                      connecting your bank and credit card accounts.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Depth5Frame
              vector0="/vector--0-2.svg"
              trackInventory="Track inventory"
              easilyTrackYourStockLevel="Easily track your stock levels, set reorder points, and manage your suppliers. You can also use barcode scanning to speed up your inventory management."
            />
            <div className="depth-5-frame-2">
              <div className="depth-6-frame-02">
                <div className="depth-7-frame-02">
                  <img
                    className="vector-0"
                    loading="eager"
                    alt=""
                    src="/vector--0-3.svg"
                  />
                  <div className="depth-8-frame-03" />
                </div>
              </div>
              <div className="depth-6-frame-11">
                <div className="depth-7-frame-03">
                  <div className="depth-8-frame-04">
                    <b className="pay-your-team">Pay your team</b>
                  </div>
                </div>
                <div className="depth-7-frame-11">
                  <div className="depth-8-frame-05">
                    <div className="run-payroll-in">
                      Run payroll in minutes with our built-in system. We'll
                      calculate your employee's paychecks, file your payroll
                      taxes, and provide W-2s at the end of the year.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Depth5Frame
              vector0="/vector--0-4.svg"
              trackInventory="Understand your business"
              easilyTrackYourStockLevel="Get detailed insights into your business performance, so you can make more informed decisions. Plus, you can create custom dashboards and add integrations to extend Headtler's capabilities."
              propAlignSelf="unset"
              propLeft="-54.81rem"
              propHeight="1.06rem"
              propHeight1="13.25rem"
              propHeight2="2.5rem"
            />
          </div>
          <AccountantBusinessPartnerFr />
          <HelpCenterCommunityDevelope />
          <PowerfulTools />
        </section>
      </main>
    </div>
  );
};

export default GalileoDesign;
