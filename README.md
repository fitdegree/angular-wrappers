# Angular 2 Input Mask

## Getting started

First, install it.

```bash
npm i --save @awaismirza/angular2-text-mask
```

Then, import it into your `@NgModule`:

```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    FormsModule,
    TextMaskModule
  ],
  declarations: []
})
export class MyModule {}
```

Then, use it in your component:
```typescript
@Component({
  selector: 'app',
  template: `
    <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
  `
})
export class AppComponent {
  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
```

## Documentation

As you can see in the code above, you are passing an object to the `textMask` directive.

#### Other use-cases

##### Unmasking the value that is stored in the model

Text Mask does not provide an option to unmask the model before storing it. You can sanitize the model on your
side. See [here](https://github.com/text-mask/text-mask/issues/109) for details.

##### `change` doesn't work

`change` on an input field will not work if `[text-mask]` is present. You can use `(ngModelChange)` instead. For more
information, see [this page](https://github.com/text-mask/text-mask/issues/236).

## Example

To see an example of the code running, follow these steps:

1. Clone the repo, `git clone git@github.com:text-mask/text-mask.git`
1. `cd text-mask`
1. `cd angular2`
1. `npm install`
1. `npm start`
1. Open [http://localhost:3000](http://localhost:3000)

The code of the example is in [`angular2/example`](https://github.com/text-mask/text-mask/tree/master/angular2/example).

## Ionic 2
Unfortunately, we are unable to support Ionic 2 `ion-input` at this point as it overrides the `ControlValueAccessor` that Text Mask requires to perform its job.
