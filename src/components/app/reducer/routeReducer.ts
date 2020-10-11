type routeState = {
  [route: string]: {
    isHover: boolean;
  };
};

type ActionMap =
  | {
      type: 'hoverIn';
      payload: {
        route: string;
      };
    }
  | {
      type: 'hoverOut';
      payload: {
        route: string;
      };
    };

export function routeReducer(state: routeState, action: ActionMap): routeState {
  switch (action.type) {
    case 'hoverIn':
      return {
        ...state,
        [action.payload.route]: {
          ...(state[action.payload.route] || {}),
          isHover: true,
        },
      };

    case 'hoverOut':
      return {
        ...state,
        [action.payload.route]: {
          ...(state[action.payload.route] || {}),
          isHover: false,
        },
      };

    default:
      throw new Error();
  }
}
