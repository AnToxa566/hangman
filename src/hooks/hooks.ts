import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import type { RootState, AppDispatch } from '../store/store';

type DispatchFunc = () => AppDispatch;

export { useState, useEffect, useCallback, useMemo } from 'react';

export { useNavigate } from 'react-router';

export { useSelector, useDispatch } from 'react-redux';

export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
