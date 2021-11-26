import Image from 'next/image';
import { CloseOutline } from 'react-ionicons';

function Sidebar({ show }) {

    const content = <div className="modal fade panelbox panelbox-left order-sidebar" id="sidebarPanel" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body p-0">
                    <div className="profileBox pt-2 pb-2">
                        <div className="image-wrapper">
                            <Image src="/images/profile/profile.png" width={36} height={36} alt="image" className="imaged  w36" />
                        </div>
                        <div className="in">
                            <strong>Sofie Taden</strong>
                        </div>
                        <a href="#" className="btn btn-link btn-icon sidebar-close" data-bs-dismiss="modal">
                            <CloseOutline />
                        </a>
                    </div>
                    <div className="bg-primary">
                        <div className="sidebar-balance">
                            <div className="title-wrapper">
                                <div className="order-id">Current Order Id: #1020</div>
                                <span className="order-date text-muted">Placed Today 08:20 PM</span>
                            </div>
                            <div className="in mt-2">
                                <h1 className="amount">17.00</h1>
                                <span className="text-success">Paid</span>
                            </div>

                            <div className="section full mt-1">
                                <div className="wide-block p-0">

                                    <div className="input-list">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="orderConfirmed" />
                                            <label className="form-check-label" htmlFor="orderConfirmed">Order Confirmed</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="preparingOrder" />
                                            <label className="form-check-label" htmlFor="preparingOrder">We are preparing your
                                                order</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="EnjoyOrder" />
                                            <label className="form-check-label" htmlFor="EnjoyOrder">Enjoy</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="listview flush transparent no-line image-listview">
                        <li>
                            <a href="order-checkout-my-order.html" className="item">
                                <div className="icon-box bg-primary card-border">
                                    <ion-icon name="cart-outline"></ion-icon>
                                </div>
                                <div className="in">
                                    My Current Order
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="order-menu.html" className="item">
                                <div className="icon-box bg-primary card-border">
                                    <ion-icon name="pricetags-outline"></ion-icon>
                                </div>
                                <div className="in">
                                    Menu
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="order-receipts.html" className="item">
                                <div className="icon-box bg-primary card-border">
                                    <ion-icon name="receipt-outline"></ion-icon>
                                </div>
                                <div className="in">
                                    Receipts
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="order-my-profile.html" className="item">
                                <div className="icon-box bg-primary card-border">
                                    <ion-icon name="person-outline"></ion-icon>
                                </div>
                                <div className="in">
                                    My Profile
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="sidebar-preferred-lang mt-2">
                        <div className="section full">
                            <div className="wide-block py-2">
                                <h4>Select preferred language</h4>
                                <ul id="sidebarLangFlag" className="sidebar-lang-flag my-2">
                                    <li className="sidebar-single-flag sidebar-flag-active">
                                        <Image src="/images/flag/english.jpg" height={40} width={40} alt="us" />
                                    </li>
                                    <li className="sidebar-single-flag">
                                        <Image src="/images/flag/russian.jpg" height={40} width={40} alt="france" />
                                    </li>
                                    <li className="sidebar-single-flag">
                                        <Image src="/images/flag/danish.jpg" height={40} width={40} alt="danish" />
                                    </li>
                                    <li className="sidebar-single-flag">
                                        <Image src="/images/flag/spanish.jpg" height={40} width={40} alt="spanish" />
                                    </li>
                                </ul>
                                <p id="sidebarLangNameShow">English (American)</p>
                            </div>
                        </div>
                    </div>
                    <ul className="listview darkmode-switcher image-listview text inset no-line mt-2">
                        <li>
                            <div className="item">
                                <div className="in">
                                    <div className="form-check form-switch me-2">
                                        <input className="form-check-input dark-mode-switch" type="checkbox"
                                            id="darkmodeSwitch" />
                                        <label className="form-check-label" htmlFor="darkmodeSwitch"></label>
                                    </div>
                                    <div>
                                        Dark Mode
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="section log-out-btn mt-3">
                        <a href="#" className="btn bg-primary btn-shadow btn-lg">Log Out</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    return content;
}

export default Sidebar;