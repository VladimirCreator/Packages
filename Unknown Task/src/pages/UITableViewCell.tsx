import { useState } from "react";
import { Row, Col, Dropdown } from "react-bootstrap"

import Task, { TaskState } from "../Task"

export default function UITableViewCell({ task }: { task: Task }) {
    const [selectedItem, setSelectedItem] = useState("Выполнено")

    function handleSelect(eventKey: any) {
        setSelectedItem(eventKey)
    }
    function needsAuto(key: string) {
        switch (key) {
            case "task_code":
                return 1
            case "project_code":
            case "date":
            case "priority":
            case "planned_time":
            case "actual_time":
                return "auto"
            default:
                return undefined
        }
    }

    if (typeof task !== `undefined`) {
        return <Row>
            {
                Object.keys(task).map(key => {
                    if (!key.includes(`state`)) {
                        return <Col md={needsAuto(key)}>{task[key].toString()}</Col>
                    }
                    return <Col>
                        <Dropdown onSelect={handleSelect}>
                            <Dropdown.Toggle size="sm">
                                {selectedItem}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {[TaskState.done, TaskState.paused, TaskState.wip].map(state => {
                                    return <Dropdown.Item eventKey={state}>{state}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                })
            }
        </Row>
    }
    return <h1>Error</h1>
}
