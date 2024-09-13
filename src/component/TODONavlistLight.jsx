import DONUTCHART from "../component/donutchart/DONUTCHART";
import TextCell1 from "../component/textcell/TextCell1";
import TextCell3 from "../component/textcell/TextCell3";
import styles from "./TODONavlistLight.module.css";
import { useEffect, useState } from "react";

const TODONavlistLight = (props) => {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('white');
  const [selectedSection, setSelectedSection] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [taskReminder, setTaskReminder] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    setTasks(props?.tasks || []);
  }, [props?.tasks]);

  useEffect(() => {
    document.body.style.background = theme;
  }, [theme]);

  const changeTheme = () => setTheme(prevTheme => (prevTheme === 'white' ? 'black' : 'white'));

  const filterTasks = () => {
    switch (selectedSection) {
      case 'all':
        return tasks;
      case 'important':
        return tasks.filter(task => task.important);
      case 'today':
        return tasks.filter(task => task.dueToday);
      case 'planned':
        return tasks.filter(task => task.planned);
      case 'assignedToMe':
        return tasks.filter(task => task.assignedTo === 'me');
      default:
        return tasks;
    }
  };

  const setReminder = (taskId) => {
    const reminder = prompt("Enter reminder time (e.g., 'Tomorrow at 5pm'):");
    if (reminder) {
      setTaskReminder(reminder);
      alert(`Reminder for task ${taskId} set to: ${reminder}`);
    }
  };

  const addDueDate = (taskId) => {
    const dueDate = prompt("Enter due date (e.g., '2024-09-30'):");
    if (dueDate) {
      setTaskDueDate(dueDate);
      alert(`Due date for task ${taskId} set to: ${dueDate}`);
    }
  };

  const repeatTask = (taskId) => {
    
  };

  const handleStarClick = (taskId) => {
    setSelectedTaskId(taskId);
    setIsSidebarOpen(true);
  };

  return (
    <div className={styles.toDoNavlistLight} style={{ backgroundColor: theme }}>
      <div className={styles.webAppNavBar} style={{ backgroundColor: theme }}>
        <div className={styles.container}>
          <img 
            className={styles.menuIcon} 
            alt="Menu" 
            src="/menu1.svg" 
            onClick={toggleSidebar} 
            style={{ cursor: "pointer" }} 
          />
          <div className={styles.logo}>
            <img className={styles.logomarkIcon} alt="Logo" src="/logomark@2x.png" />
            <b className={styles.doit}>DoIt</b>
          </div>
        </div>
        <div className={styles.header}>
          <img className={styles.menuIcon} alt="Search" src="/search1.svg" />
          <img className={styles.menuIcon} alt="App Grid" src="/appgrid1.svg" />
          <img
            className={styles.menuIcon}
            alt="Change Theme"
            src="/rimoonclearline.svg"
            onClick={changeTheme}
            style={{ cursor: "pointer" }}
          />
          <span style={{ fontSize: "15px", cursor: "pointer" }} onClick={props.handleLogout}>logout</span>
        </div>
        <img className={styles.dividerIcon} alt="Divider" src="" />
      </div>

      <div className={styles.labelParent} style={{ position: "fixed", marginTop:"10%", backgroundColor: theme }}>
        <div className={styles.label}>Hey, ABCD</div>
        <div className={styles.sidebar}>
          <div className={styles.sidePanelMenu} style={{ backgroundColor: theme }}>
            <div className={styles.menuItem} style={{ backgroundColor: theme }} onClick={() => setSelectedSection('all')}>
              <img className={styles.menuIcon} alt="All Tasks" src="/menu4.svg" />
              <div className={styles.label1}>All Tasks</div>
            </div>
            <div className={styles.menuItem1} style={{ backgroundColor: theme }} onClick={() => setSelectedSection('today')}>
              <img className={styles.menuIcon} alt="Today" src="/calendar.svg" />
              <div className={styles.label1}>Today</div>
            </div>
            <div className={styles.menuItem} style={{ backgroundColor: theme }} onClick={() => setSelectedSection('important')}>
              <img className={styles.menuIcon} alt="Important" src="/clock3.svg" />
              <div className={styles.label1}>Important</div>
            </div>
            <div className={styles.menuItem} style={{ backgroundColor: theme }} onClick={() => setSelectedSection('planned')}>
              <img className={styles.menuIcon} alt="Planned" src="/clock4.svg" />
              <div className={styles.label1}>Planned</div>
            </div>
            <div className={styles.menuItem} style={{ backgroundColor: theme }} onClick={() => setSelectedSection('assignedToMe')}>
              <img className={styles.menuIcon} alt="Assigned to Me" src="/clock5.svg" />
              <div className={styles.label1}>Assigned to me</div>
            </div>
          </div>
        </div>
        <div className={styles.sidebar1} style={{ backgroundColor: theme }}>
          <div className={styles.sidePanelMenu} style={{ backgroundColor: theme }}>
            <div className={styles.menuItem} style={{ backgroundColor: theme }}>
              <img className={styles.menuIcon} alt="Add List" src="/menu5.svg" />
              <div className={styles.label1}>Add list</div>
            </div>
          </div>
        </div>
        <div className={styles.sidebar2} style={{ backgroundColor: theme }}>
          <div className={styles.sidePanelMenu2} style={{ backgroundColor: theme }}>
            <DONUTCHART {...props} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{
                width: '10px',
                height: '10px',
                backgroundColor: 'green',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '5px',
                marginBottom: '0px'
              }} />
              <span>pending</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#1ab502',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '5px',
                marginBottom: '0px'
              }} />
              <span>completed</span>
            </div>
          </div>
        </div>
        <img className={styles.profileIcon} alt="Profile" src="/profile@2x.png" />
      </div>

      <div className={styles.container1} style={{ paddingLeft: "20%", backgroundColor: theme }}>
        <div className={styles.mainContent}>
          <div className={styles.table} style={{ backgroundColor: theme }}>
            <div className={styles.column1}>
              <div className={styles.title}>
                <div className={styles.label7}>
                  <div className={styles.label8} style={{ paddingBottom: "10px" }}>To Do</div>
                  <img className={styles.menuIcon} alt="Dropdown" src="/caretdown1.svg" />
                </div>
              </div>
              <TextCell1
                {...props}
                claritynotificationLine="/claritynotificationline1.svg"
                birepeat="/birepeat1.svg"
                iconoircalendar="/iconoircalendar1.svg"
              />
             
              <div
                style={{
                  position: 'fixed',
                  top: '35%',
                  left: 350,
                  right: 0,
                  bottom: 0,
                  overflowY: 'auto',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                }}
              >
                {
                  filterTasks()?.map((task) => {
                    if (!task.completed) {
                      return (
                        <div key={task.id} className={styles.taskItem}>
                          <TextCell3
                            {...props}
                            id={task.id}
                            strike={false}
                            title={task.title}
                            checkSmall={false}
                            phstar={task.important ? "/phstar4.svg" : "/phstar3.svg"}
                            propWidth="365.5px"
                            propBorder="2px solid #1e1e1e"
                            propColor="#1b281b"
                            onStarClick={() => handleStarClick(task.id)}
                          />
                          <button
                            onClick={() => props.deleteTask(task.id)}
                            className={styles.deleteButton}
                          >
                            Delete
                          </button>
                        </div>
                      );
                    }
                    return null;
                  })
                }
                <div className={styles.completed}>Completed</div>
                {
                  filterTasks()?.map((task) => {
                    if (task.completed) {
                      return (
                        <div key={task.id} className={styles.taskItem}>
                          <TextCell3
                            {...props}
                            id={task.id}
                            strike={true}
                            title={task.title}
                            checkSmall={true}
                            phstar={task.important ? "/phstar4.svg" : "/phstar3.svg"}
                            propWidth="365.5px"
                            propBorder="2px solid #1e1e1e"
                            propColor="#1b281b"
                          />
                          <button
                            onClick={() => props.deleteTask(task.id)}
                            className={styles.deleteButton}
                          >
                            Delete
                          </button>
                        </div>
                      );
                    }
                    return null;
                  })
                }
                {isSidebarOpen && selectedTaskId && (
                  <div className={styles.sidebarTaskOptions}>
                    <div className={styles.optionItem} onClick={() => setReminder(selectedTaskId)}>Set Reminder</div>
                    <div className={styles.optionItem} onClick={() => addDueDate(selectedTaskId)}>Add Due Date</div>
                    <div className={styles.optionItem} onClick={() => repeatTask(selectedTaskId)}>Repeat</div>
                    <div className={styles.optionItem} onClick={toggleSidebar}>Close</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TODONavlistLight;
