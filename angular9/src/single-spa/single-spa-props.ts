import { ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import { AppProps } from "single-spa";
import { User } from "src/app/core/auth.service";

// 主应用的共享数据
type MasterState = {
  user?: User;
};

export const singleSpaPropsSubject = new ReplaySubject<SingleSpaProps>(1);

// Add any custom single-spa props you have to this type def
// https://single-spa.js.org/docs/building-applications.html#custom-props
export type SingleSpaProps = AppProps & {
  masterState: MasterState;
  setMasterState: (state: any) => void;
};

// 向父组件传值
export const setMasterState = (state: Partial<MasterState>) => {
  singleSpaPropsSubject.pipe(take(1)).subscribe((props) => {
    props.setMasterState({ ...props.masterState, ...state });
  });
};
