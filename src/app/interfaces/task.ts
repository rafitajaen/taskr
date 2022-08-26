import { Delay } from "../enums/delay";
import { Status } from "../enums/status";

export interface Task {
  delay: Delay;
  isCompleted: boolean;
  title: string;
  status: Status;
}
