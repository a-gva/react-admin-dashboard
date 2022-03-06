import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, Group, Inventory2Outlined, ForumOutlined, MessageOutlined, AssessmentOutlined, ReceiptLongOutlined, MonetizationOnOutlined, EmailOutlined, SupervisorAccountOutlined, HomeOutlined } from '@mui/icons-material/';


function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Dashboard</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <HomeOutlined className="sidebarIcon" /> Home
                            </li>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" /> Análises
                            </li>
                            <li className="sidebarListItem">
                                <MonetizationOnOutlined className="sidebarIcon" /> Vendas
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Menu Rápido</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <Group className="sidebarIcon" /> Usuários
                            </li>
                            <li className="sidebarListItem">
                                <Inventory2Outlined className="sidebarIcon" /> Produtos
                            </li>
                            <li className="sidebarListItem">
                                <ReceiptLongOutlined className="sidebarIcon" /> Transações
                            </li>
                            <li className="sidebarListItem">
                                <AssessmentOutlined className="sidebarIcon" /> Relatórios
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Notificações</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <EmailOutlined className="sidebarIcon" /> E-mail
                            </li>
                            <li className="sidebarListItem">
                                <ForumOutlined className="sidebarIcon" /> Feedback
                            </li>
                            <li className="sidebarListItem">
                                <MessageOutlined className="sidebarIcon" /> Mensagens
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Equipe</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <SupervisorAccountOutlined className="sidebarIcon" /> Gerente
                            </li>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" /> Análises
                            </li>
                            <li className="sidebarListItem">
                                <AssessmentOutlined className="sidebarIcon" /> Relatórios
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
