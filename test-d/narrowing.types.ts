import {
  createEnumGuard,
  createTypeGuard,
  isArrayOf,
  isDefined,
  isNonEmptyString,
  isNumber,
  isPlainObject,
  isString,
  isThenable,
  isValidDate,
} from '../src/index';

declare function expectType<T>(value: T): void;

const HALF_THRESHOLD = Number('0.5');
const WIDGET_ID = Number('1');

const maybeName: string | null | undefined =
  Math.random() > HALF_THRESHOLD ? 'Ada' : null;
if (isDefined(maybeName)) {
  expectType<string>(maybeName);
}

const maybeText: unknown = 'hello';
if (isNonEmptyString(maybeText)) {
  expectType<string>(maybeText);
  // @ts-expect-error Strings do not expose number-only methods.
  maybeText.toFixed();
}

const maybeCount: unknown = WIDGET_ID;
if (isNumber(maybeCount)) {
  expectType<number>(maybeCount);
  // @ts-expect-error Numbers do not expose string-only methods.
  maybeCount.toUpperCase();
}

const maybeValues: unknown = ['a', 'b'];
if (isArrayOf(isString)(maybeValues)) {
  expectType<string[]>(maybeValues);
}

const maybeRecord: unknown = { enabled: true };
if (isPlainObject(maybeRecord)) {
  expectType<Record<string, unknown>>(maybeRecord);
}

const maybeDate: unknown = new Date('2020-01-01T00:00:00.000Z');
if (isValidDate(maybeDate)) {
  expectType<Date>(maybeDate);
}

const maybeThenable: unknown = Promise.resolve('done');
if (isThenable(maybeThenable)) {
  expectType<PromiseLike<unknown>>(maybeThenable);
}

class Widget {
  /** Creates a widget with a stable numeric identifier. */
  constructor(public readonly id: number) {}
}
const maybeWidget: unknown = new Widget(WIDGET_ID);
const isWidget = createTypeGuard(Widget);
if (isWidget(maybeWidget)) {
  expectType<Widget>(maybeWidget);
}

enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}
const maybeStatus: unknown = 'ACTIVE';
const isStatus = createEnumGuard(Status, 'Status');
if (isStatus(maybeStatus)) {
  expectType<Status>(maybeStatus);
}
