---
id: unit-test
title: Unit Testing
sidebar_label: Unit Testing
---

This boilerplate uses [Jest](https://jestjs.io/docs/en/getting-started) and [Enzyme](https://github.com/airbnb/enzyme) for unit testing.

Example testing functions from next-boilerplate.

## Testing Components
```js
describe('Components', () => {
    describe('Heading', () => {
        it("should render without throwing an error", () => {
            let wrap = shallow(<Heading text={'World'} />);

            expect(wrap.find('div.title').exists()).toBe(true);
        });
    });
});
```

## Testing Actions
```js
describe('Home action tests', () => {
    test('Map test', async () => {
        const store = mockStore();

        const expectedActions = [
            {
                payload: {
                    version: 2
                },
                type: ActionConsts.Home.SetReducer
            }
        ];
        await store.dispatch(HomeActions.Map({
            version: 2
        }));

        expect(store.getActions()).toEqual(expectedActions);
    });
}
```

## Testing Services

```javascript
describe('Http request tests', () => {
    test('200 test', async () => {
        const result = await Http.Request<{success:boolean}>('GET', '/200');
        expect(result.success).toEqual(true);
    });

    test('404 test', async () => {
        try {
            await Http.Request('GET', '/404');

        } catch (error) {
            expect(error.status).toEqual(404);
        }
    });
}
```

## Testing Reducers

```javascript
describe('home reducer', () => {
    it('should return the initial state', () => {
        expect(HomeReducer(undefined, {} as IAction<IHomePage.IDispatchProps>)).toEqual(
            {
                home: {
                    version: 1
                }
            }
        );
    });

    it('should handle SetReducer', () => {
        expect(
            HomeReducer([], {
                type: ActionConsts.Home.SetReducer,
                payload: {
                    version: 2
                }
            })
        ).toEqual(
            {
                version: 2
            }
        )
    });

    it('should handle ResetReducer', () => {
        expect(
            HomeReducer([], {
                type: ActionConsts.Home.ResetReducer
            })
        ).toEqual(
            {
                home: {
                    version: 1
                }
            }
        )
    });
});
```