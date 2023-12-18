export interface Locations {
id: number;
title: string;
content: string;
opened: boolean;
mask: 'required' | 'recommended' | 'not_required';
towel: 'required' | 'recommended' | 'not_required';
fountain: 'allowed' | 'partial' | 'not_allowed';
locker_room: 'allowed' | 'partial' | 'closed';
schedules: Schedule[];
}

export interface Schedule {
weekdays: string;
hour: string;
}

export interface DataResponse {
current_country_id: number;
locations: Locations[];
}
