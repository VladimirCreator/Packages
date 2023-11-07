import Task from "../Task"
import UITableViewCell from './UITableViewCell'

import { Accordion, Row, Table } from "react-bootstrap"

export default function UIAccordion({ title, tasks }: { title: string, tasks: Task[] }) {
    if (typeof tasks !== `undefined`) {
        return <Accordion.Item eventKey={title}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                { tasks.map(task => <UITableViewCell task={task} />)}
            </Accordion.Body>
        </Accordion.Item>
    }
    return <h1>error</h1>
}
