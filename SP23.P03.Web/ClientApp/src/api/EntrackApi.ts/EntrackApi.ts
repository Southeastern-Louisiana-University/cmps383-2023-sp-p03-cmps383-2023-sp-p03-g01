/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateUserDto {
    /** @minLength 1 */
    userName: string;
    /** @minLength 1 */
    password: string;
    /** @minItems 1 */
    roles: string[];
}

export interface LoginDto {
    /** @minLength 1 */
    userName: string;
    /** @minLength 1 */
    password: string;
    tickets?: TrainRouteTicketDto[] | null;
}

export interface SeatDto {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    quantity?: number;
    type?: string | null;
}

export interface SectionCreateDto {
    /** @format int32 */
    id?: number;
    class?: string | null;
    /** @format int32 */
    capacity?: number;
    features?: string | null;
}

export interface SectionDto {
    /** @format int32 */
    id?: number;
    class?: string | null;
    /** @format int32 */
    capacity?: number;
    features?: string | null;
    seatList?: SeatDto[] | null;
}

export interface TrainCreateDto {
    /** @format int32 */
    id?: number;
    locomotive?: string | null;
    /** @format int32 */
    trainRouteId?: number | null;
}

export interface TrainDto {
    /** @format int32 */
    id?: number;
    locomotive?: string | null;
    /** @format int32 */
    trainRouteId?: number | null;
    sections?: SectionDto[] | null;
}

export interface TrainPathDto {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    startingTrainStationId?: number | null;
    /** @format int32 */
    endingTrainStationId?: number | null;
}

export interface TrainRouteCreateDto {
    /** @format int32 */
    id?: number;
    /** @format date-time */
    arrivalTime?: string;
    /** @format date-time */
    deperatureTime?: string;
    /** @format int32 */
    pathId?: number | null;
    /** @format int32 */
    trainId?: number | null;
    layover?: string | null;
    dwellTime?: string | null;
}

export interface TrainRouteDto {
    /** @format int32 */
    id?: number;
    arrivalTime?: string | null;
    departureTime?: string | null;
    departureStation?: string | null;
    arrivalStation?: string | null;
    /** @format int32 */
    passengerCount?: number | null;
    layover?: string | null;
    dwellTime?: string | null;
}

export interface TrainRouteTicketCreateDto {
    /** @format int32 */
    trainRouteId?: number | null;
    /** @format int32 */
    seatId?: number | null;
    /** @format double */
    cost?: number;
}

export interface TrainRouteTicketDto {
    /** @format int32 */
    id?: number;
    trainRoute?: TrainRouteDto;
    code?: string | null;
    seatType?: string | null;
    /** @format double */
    cost?: number;
    /** @format int32 */
    passagerId?: number | null;
}

export interface TrainScheduledRouteCreateDto {
    routesId?: number[] | null;
}

export interface TrainScheduledRouteTicketDto {
    /** @format int32 */
    id?: number;
    /** @format int32 */
    routeId?: number | null;
    code?: string | null;
    seatType?: string | null;
    /** @format double */
    cost?: number;
}

export interface TrainScheduledRoutesDto {
    /** @format int32 */
    id?: number;
    routes?: TrainRouteDto[] | null;
    ticket?: TrainScheduledRouteTicketDto[] | null;
    departureStation?: string | null;
    arrivalStation?: string | null;
}

export interface TrainStationDto {
    /** @format int32 */
    id?: number;
    name?: string | null;
    address?: string | null;
    /** @format int32 */
    managerId?: number | null;
    hours?: string | null;
    city?: string | null;
    state?: string | null;
}

export interface UserDto {
    /** @format int32 */
    id: number;
    /** @minLength 1 */
    userName: string;
    roles: string[];
    tickets?: TrainRouteTicketDto[] | null;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
    securityWorker?: (
        securityData: SecurityDataType | null,
    ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}

export enum ContentType {
    Json = 'application/json',
    FormData = 'multipart/form-data',
    UrlEncoded = 'application/x-www-form-urlencoded',
    Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
    public instance: AxiosInstance;
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
    private secure?: boolean;
    private format?: ResponseType;

    constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
        this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data;
    };

    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
        const method = params1.method || (params2 && params2.method);

        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }

    protected stringifyFormItem(formItem: unknown) {
        if (typeof formItem === 'object' && formItem !== null) {
            return JSON.stringify(formItem);
        } else {
            return `${formItem}`;
        }
    }

    protected createFormData(input: Record<string, unknown>): FormData {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent: any[] = property instanceof Array ? property : [property];

            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }

            return formData;
        }, new FormData());
    }

    public request = async <T = any, _E = any>({
        secure,
        path,
        type,
        query,
        format,
        body,
        ...params
    }: FullRequestParams): Promise<AxiosResponse<T>> => {
        const secureParams =
            ((typeof secure === 'boolean' ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const responseFormat = format || this.format || undefined;

        if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
            body = this.createFormData(body as Record<string, unknown>);
        }

        if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
            body = JSON.stringify(body);
        }

        return this.instance.request({
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
            },
            params: query,
            responseType: responseFormat,
            data: body,
            url: path,
        });
    };
}

/**
 * @title SP23.P03.Web
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    api = {
        /**
         * No description
         *
         * @tags Authentication
         * @name AuthenticationMeList
         * @request GET:/api/authentication/me
         */
        authenticationMeList: (params: RequestParams = {}) =>
            this.request<UserDto, any>({
                path: `/api/authentication/me`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Authentication
         * @name AuthenticationLoginCreate
         * @request POST:/api/authentication/login
         */
        authenticationLoginCreate: (data: LoginDto, params: RequestParams = {}) =>
            this.request<UserDto, any>({
                path: `/api/authentication/login`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Authentication
         * @name AuthenticationLogoutCreate
         * @request POST:/api/authentication/logout
         */
        authenticationLogoutCreate: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/authentication/logout`,
                method: 'POST',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Payment
         * @name PaymentCreateCheckoutSessionCreate
         * @request POST:/api/payment/create-checkout-session
         */
        paymentCreateCheckoutSessionCreate: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/payment/create-checkout-session`,
                method: 'POST',
                ...params,
            }),

        /**
         * No description
         *
         * @tags ScheduledRoutes
         * @name ScheduledRoutesList
         * @request GET:/api/scheduledRoutes
         */
        scheduledRoutesList: (params: RequestParams = {}) =>
            this.request<TrainScheduledRoutesDto[], any>({
                path: `/api/scheduledRoutes`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags ScheduledRoutes
         * @name ScheduledRoutesCreate
         * @request POST:/api/scheduledRoutes
         */
        scheduledRoutesCreate: (data: TrainScheduledRouteCreateDto, params: RequestParams = {}) =>
            this.request<TrainScheduledRouteCreateDto, any>({
                path: `/api/scheduledRoutes`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags ScheduledRoutes
         * @name ScheduledRoutesDetail
         * @request GET:/api/scheduledRoutes/{id}
         */
        scheduledRoutesDetail: (id: number, params: RequestParams = {}) =>
            this.request<TrainScheduledRoutesDto, any>({
                path: `/api/scheduledRoutes/${id}`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags ScheduledRoutes
         * @name ScheduledRoutesUpdate
         * @request PUT:/api/scheduledRoutes/{id}
         */
        scheduledRoutesUpdate: (id: number, data: TrainScheduledRouteCreateDto, params: RequestParams = {}) =>
            this.request<TrainScheduledRouteCreateDto, any>({
                path: `/api/scheduledRoutes/${id}`,
                method: 'PUT',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags ScheduledRoutes
         * @name ScheduledRoutesDelete
         * @request DELETE:/api/scheduledRoutes/{id}
         */
        scheduledRoutesDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/scheduledRoutes/${id}`,
                method: 'DELETE',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Seat
         * @name SeatsList
         * @request GET:/api/seats
         */
        seatsList: (params: RequestParams = {}) =>
            this.request<SeatDto[], any>({
                path: `/api/seats`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Seat
         * @name SeatsCreate
         * @request POST:/api/seats
         */
        seatsCreate: (data: SeatDto, params: RequestParams = {}) =>
            this.request<SeatDto, any>({
                path: `/api/seats`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Seat
         * @name SeatsDetail
         * @request GET:/api/seats/{id}
         */
        seatsDetail: (id: number, params: RequestParams = {}) =>
            this.request<SeatDto, any>({
                path: `/api/seats/${id}`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Seat
         * @name SeatsUpdate
         * @request PUT:/api/seats/{id}
         */
        seatsUpdate: (id: number, data: SeatDto, params: RequestParams = {}) =>
            this.request<SeatDto, any>({
                path: `/api/seats/${id}`,
                method: 'PUT',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Seat
         * @name SeatsDelete
         * @request DELETE:/api/seats/{id}
         */
        seatsDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/seats/${id}`,
                method: 'DELETE',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Section
         * @name SectionsList
         * @request GET:/api/sections
         */
        sectionsList: (params: RequestParams = {}) =>
            this.request<SectionDto[], any>({
                path: `/api/sections`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Section
         * @name SectionsCreate
         * @request POST:/api/sections
         */
        sectionsCreate: (data: SectionCreateDto, params: RequestParams = {}) =>
            this.request<SectionCreateDto, any>({
                path: `/api/sections`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Section
         * @name SectionsDetail
         * @request GET:/api/sections/{id}
         */
        sectionsDetail: (id: number, params: RequestParams = {}) =>
            this.request<SectionDto, any>({
                path: `/api/sections/${id}`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Section
         * @name SectionsUpdate
         * @request PUT:/api/sections/{id}
         */
        sectionsUpdate: (id: number, data: SectionCreateDto, params: RequestParams = {}) =>
            this.request<SectionDto, any>({
                path: `/api/sections/${id}`,
                method: 'PUT',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Section
         * @name SectionsDelete
         * @request DELETE:/api/sections/{id}
         */
        sectionsDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/sections/${id}`,
                method: 'DELETE',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Stations
         * @name StationsList
         * @request GET:/api/stations
         */
        stationsList: (params: RequestParams = {}) =>
            this.request<TrainStationDto[], any>({
                path: `/api/stations`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Stations
         * @name StationsCreate
         * @request POST:/api/stations
         */
        stationsCreate: (data: TrainStationDto, params: RequestParams = {}) =>
            this.request<TrainStationDto, any>({
                path: `/api/stations`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Stations
         * @name StationsDetail
         * @request GET:/api/stations/{id}
         */
        stationsDetail: (id: number, params: RequestParams = {}) =>
            this.request<TrainStationDto, any>({
                path: `/api/stations/${id}`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Stations
         * @name StationsUpdate
         * @request PUT:/api/stations/{id}
         */
        stationsUpdate: (id: number, data: TrainStationDto, params: RequestParams = {}) =>
            this.request<TrainStationDto, any>({
                path: `/api/stations/${id}`,
                method: 'PUT',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Stations
         * @name StationsDelete
         * @request DELETE:/api/stations/{id}
         */
        stationsDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/stations/${id}`,
                method: 'DELETE',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Ticket
         * @name TicketsList
         * @request GET:/api/tickets
         */
        ticketsList: (params: RequestParams = {}) =>
            this.request<TrainRouteTicketDto[], any>({
                path: `/api/tickets`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Ticket
         * @name TicketsCreate
         * @request POST:/api/tickets
         */
        ticketsCreate: (data: TrainRouteTicketCreateDto, params: RequestParams = {}) =>
            this.request<TrainRouteTicketDto, any>({
                path: `/api/tickets`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Ticket
         * @name TicketsDetail
         * @request GET:/api/tickets/{id}
         */
        ticketsDetail: (id: number, params: RequestParams = {}) =>
            this.request<TrainScheduledRoutesDto, any>({
                path: `/api/tickets/${id}`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Ticket
         * @name TicketsUpdate
         * @request PUT:/api/tickets/{id}
         */
        ticketsUpdate: (id: number, data: TrainRouteTicketCreateDto, params: RequestParams = {}) =>
            this.request<TrainRouteTicketDto, any>({
                path: `/api/tickets/${id}`,
                method: 'PUT',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Ticket
         * @name TicketsDelete
         * @request DELETE:/api/tickets/{id}
         */
        ticketsDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/tickets/${id}`,
                method: 'DELETE',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Ticket
         * @name TicketsUpdate2
         * @request PUT:/api/tickets/{id}/{userId}
         * @originalName ticketsUpdate
         * @duplicate
         */
        ticketsUpdate2: (id: number, userId: number, params: RequestParams = {}) =>
            this.request<TrainRouteTicketDto, any>({
                path: `/api/tickets/${id}/${userId}`,
                method: 'PUT',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Train
         * @name TrainsList
         * @request GET:/api/trains
         */
        trainsList: (params: RequestParams = {}) =>
            this.request<TrainDto[], any>({
                path: `/api/trains`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Train
         * @name TrainsCreate
         * @request POST:/api/trains
         */
        trainsCreate: (data: TrainCreateDto, params: RequestParams = {}) =>
            this.request<TrainCreateDto, any>({
                path: `/api/trains`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Train
         * @name TrainsDetail
         * @request GET:/api/trains/{id}
         */
        trainsDetail: (id: number, params: RequestParams = {}) =>
            this.request<TrainDto, any>({
                path: `/api/trains/${id}`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Train
         * @name TrainsUpdate
         * @request PUT:/api/trains/{id}
         */
        trainsUpdate: (id: number, data: TrainCreateDto, params: RequestParams = {}) =>
            this.request<TrainCreateDto, any>({
                path: `/api/trains/${id}`,
                method: 'PUT',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Train
         * @name TrainsDelete
         * @request DELETE:/api/trains/{id}
         */
        trainsDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/trains/${id}`,
                method: 'DELETE',
                ...params,
            }),

        /**
         * No description
         *
         * @tags TrainPath
         * @name PathsList
         * @request GET:/api/paths
         */
        pathsList: (params: RequestParams = {}) =>
            this.request<TrainPathDto[], any>({
                path: `/api/paths`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags TrainPath
         * @name PathsCreate
         * @request POST:/api/paths
         */
        pathsCreate: (data: TrainPathDto, params: RequestParams = {}) =>
            this.request<TrainPathDto, any>({
                path: `/api/paths`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags TrainPath
         * @name PathsDetail
         * @request GET:/api/paths/{id}
         */
        pathsDetail: (id: number, params: RequestParams = {}) =>
            this.request<TrainPathDto, any>({
                path: `/api/paths/${id}`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags TrainPath
         * @name PathsUpdate
         * @request PUT:/api/paths/{id}
         */
        pathsUpdate: (id: number, data: TrainPathDto, params: RequestParams = {}) =>
            this.request<TrainPathDto, any>({
                path: `/api/paths/${id}`,
                method: 'PUT',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags TrainPath
         * @name PathsDelete
         * @request DELETE:/api/paths/{id}
         */
        pathsDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/paths/${id}`,
                method: 'DELETE',
                ...params,
            }),

        /**
         * No description
         *
         * @tags TrainRoute
         * @name RoutesList
         * @request GET:/api/routes
         */
        routesList: (params: RequestParams = {}) =>
            this.request<TrainRouteDto[], any>({
                path: `/api/routes`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags TrainRoute
         * @name RoutesCreate
         * @request POST:/api/routes
         */
        routesCreate: (data: TrainRouteCreateDto, params: RequestParams = {}) =>
            this.request<TrainRouteDto, any>({
                path: `/api/routes`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags TrainRoute
         * @name RoutesDetail
         * @request GET:/api/routes/{id}
         */
        routesDetail: (id: number, params: RequestParams = {}) =>
            this.request<TrainRouteDto, any>({
                path: `/api/routes/${id}`,
                method: 'GET',
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags TrainRoute
         * @name RoutesUpdate
         * @request PUT:/api/routes/{id}
         */
        routesUpdate: (id: number, data: TrainRouteCreateDto, params: RequestParams = {}) =>
            this.request<TrainRouteDto, any>({
                path: `/api/routes/${id}`,
                method: 'PUT',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * No description
         *
         * @tags TrainRoute
         * @name RoutesDelete
         * @request DELETE:/api/routes/{id}
         */
        routesDelete: (id: number, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/api/routes/${id}`,
                method: 'DELETE',
                ...params,
            }),

        /**
         * No description
         *
         * @tags Users
         * @name UsersCreate
         * @request POST:/api/users
         */
        usersCreate: (data: CreateUserDto, params: RequestParams = {}) =>
            this.request<UserDto, any>({
                path: `/api/users`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),
    };
}
