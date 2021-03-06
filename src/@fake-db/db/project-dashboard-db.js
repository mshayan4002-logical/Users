import mock from '../mock';

const projectDashboardAppDB = {
	widgets: {
		widget1: {
			ranges: {
				DY: 'Yesterday',
				DT: 'Today',
				DTM: 'Tomorrow'
			},
			currentRange: 'DT',
			data: {
				label: 'DUE TASKS',
				count: {
					DY: 21,
					DT: 25,
					DTM: 19
				},
				extra: {
					label: 'Completed',
					count: {
						DY: 6,
						DT: 7,
						DTM: '-'
					}
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		widget2: {
			title: 'Authentication & Authorization',
			data: {
				label: 'Users',
				count: 4,
				extra: {
					label: 'Show',
					link: '/Authentication&Authorization'
				}
			}
		},
		widget25: {
			title: 'Snippets',
			data: {
				label: 'Snippets',
				count: '11',
				extra: {
					label: 'Show',
					link: '/CMS-Entities/Snippets'
				}
			}
		},

		widget24: {
			title: 'Taggist',
			data: {
				label: 'Tags',
				count: 7,
				extra: {
					label: 'Show',
					link: '/CMS-Entities/Tag'
				}
			}
		},

		widget21: {
			title: 'Django CMS',
			data: {
				label: 'Entities',
				count: 31,
				extra: {
					label: 'Show',
					link: '/Django-CMS'
				}
			}
		},

		widget22: {
			title: 'Django Blog',
			data: {
				label: 'Blogs',
				count: 27,
				extra: {
					label: 'Show',
					link: '/CMS-Blog'
				}
			}
		},

		widget23: {
			title: 'Sites',
			data: {
				label: 'Sites',
				count: 3,
				extra: {
					label: 'Show',
					link: '/CMS-Entities/Sites'
				}
			}
		},

		widget3: {
			title: 'Issues',
			data: {
				label: 'OPEN',
				count: 32,
				extra: {
					label: 'Closed today',
					count: 0
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		widget4: {
			title: 'Features',
			data: {
				label: 'PROPOSALS',
				count: 42,
				extra: {
					label: 'Implemented',
					count: 8
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		widget5: {
			title: 'Github Issues',
			ranges: {
				TW: 'This Week',
				LW: 'Last Week',
				'2W': '2 Weeks Ago'
			},
			mainChart: {
				TW: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [
						{
							type: 'bar',
							label: 'Issues',
							data: [42, 28, 43, 34, 20, 25, 22],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Closed issues',
							data: [11, 10, 8, 11, 8, 10, 17],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						}
					]
				},
				'2W': {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [
						{
							type: 'bar',
							label: 'Issues',
							data: [37, 32, 39, 27, 18, 24, 20],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Closed issues',
							data: [9, 12, 9, 12, 7, 8, 16],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						}
					]
				},
				LW: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [
						{
							type: 'bar',
							label: 'Issues',
							data: [37, 24, 51, 31, 29, 17, 31],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Closed issues',
							data: [12, 8, 7, 13, 7, 6, 10],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						}
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: false
					},
					tooltips: {
						mode: 'label'
					},
					scales: {
						xAxes: [
							{
								stacked: true,
								display: true,
								gridLines: {
									display: false
								},
								labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
							}
						],
						yAxes: [
							{
								stacked: true,
								type: 'linear',
								display: true,
								position: 'left',
								gridLines: {
									display: false
								},
								labels: {
									show: true
								}
							}
						]
					}
				}
			},
			supporting: {
				created: {
					label: 'CREATED',
					count: {
						'2W': 48,
						LW: 46,
						TW: 54
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [5, 8, 5, 6, 7, 8, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [3, 2, 1, 4, 8, 8, 4],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				closed: {
					label: 'CLOSED',
					count: {
						'2W': 27,
						LW: 31,
						TW: 26
					},
					chart: {
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [3, 2, 1, 4, 8, 8, 4],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				reOpened: {
					label: 'RE-OPENED',
					count: {
						'2W': 4,
						LW: 5,
						TW: 2
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 8, 8, 6, 4, 1],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [3, 2, 1, 4, 8, 8, 4],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW2: [
							{
								name: 'RE-OPENED',
								series: [
									{
										name: 'Mon',
										value: 3
									},
									{
										name: 'Tue',
										value: 2
									},
									{
										name: 'Wed',
										value: 1
									},
									{
										name: 'Thu',
										value: 4
									},
									{
										name: 'Fri',
										value: 8
									},
									{
										name: 'Sat',
										value: 8
									},
									{
										name: 'Sun',
										value: 4
									}
								]
							}
						],
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				wontFix: {
					label: "WON'T FIX",
					count: {
						'2W': 6,
						LW: 3,
						TW: 4
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 4, 6, 5, 3, 2],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				needsTest: {
					label: 'NEEDS TEST',
					count: {
						'2W': 10,
						LW: 7,
						TW: 8
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 8, 8, 6, 4, 1],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				fixed: {
					label: 'FIXED',
					count: {
						'2W': 21,
						LW: 17,
						TW: 14
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 8, 8, 6, 4, 1],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 4, 6, 5, 3, 2],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				}
			}
		},
		widget6: {
			title: 'Task Distribution',
			ranges: {
				TW: 'This Week',
				LW: 'Last Week',
				'2W': '2 Weeks Ago'
			},
			currentRange: 'TW',
			mainChart: {
				labels: ['Frontend', 'Backend', 'API', 'Issues'],
				datasets: {
					TW: [
						{
							data: [15, 20, 38, 27],
							backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63'],
							hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F']
						}
					],
					LW: [
						{
							data: [19, 16, 42, 23],
							backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63'],
							hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F']
						}
					],
					'2W': [
						{
							data: [18, 17, 40, 25],
							backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63'],
							hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F']
						}
					]
				},
				options: {
					cutoutPercentage: 66,
					spanGaps: false,
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							padding: 16,
							usePointStyle: true
						}
					},
					maintainAspectRatio: false
				}
			},
			footerLeft: {
				title: 'Tasks Added',
				count: {
					'2W': 487,
					LW: 526,
					TW: 594
				}
			},
			footerRight: {
				title: 'Tasks Completed',
				count: {
					'2W': 193,
					LW: 260,
					TW: 287
				}
			}
		},
		widget7: {
			title: 'Schedule',
			currentRange: 'T',
			ranges: {
				T: 'Today',
				TM: 'Tomorrow'
			},
			schedule: {
				T: [
					{
						id: 1,
						title: 'Group Meeting',
						time: 'In 32 minutes'
					},
					{
						id: 2,
						title: 'Coffee Break',
						time: '10:30 AM'
					},
					{
						id: 3,
						title: 'Public Beta Release',
						time: '11:00 AM'
					},
					{
						id: 4,
						title: 'Lunch',
						time: '12:10 PM'
					},
					{
						id: 5,
						title: 'Dinner with David',
						time: '17:30 PM'
					},
					{
						id: 6,
						title: "Jane's Birthday Party",
						time: '19:30 PM'
					},
					{
						id: 7,
						title: "Overseer's Retirement Party",
						time: '21:30 PM'
					}
				],
				TM: [
					{
						id: 1,
						title: 'Marketing Meeting',
						time: '09:00 AM'
					},
					{
						id: 2,
						title: 'Public Announcement',
						time: '11:00 AM'
					},
					{
						id: 3,
						title: 'Lunch',
						time: '12:10 PM'
					},
					{
						id: 4,
						title: 'Meeting with Beta Testers',
						time: '15:00 AM'
					},
					{
						id: 5,
						title: 'Live Stream',
						time: '17:30 PM'
					},
					{
						id: 6,
						title: 'Release Party',
						time: '19:30 PM'
					},
					{
						id: 7,
						title: "CEO's Party",
						time: '22:30 PM'
					}
				]
			}
		},
		widget8: {
			title: 'Budget Distribution',
			mainChart: {
				labels: ['Wireframing', 'Design', 'Coding', 'Marketing', 'Extra'],
				datasets: [
					{
						data: [12, 17, 28, 25, 15],
						backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
						hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
					}
				],
				options: {
					cutoutPercentage: 0,
					spanGaps: false,
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							padding: 16,
							usePointStyle: true
						}
					},
					maintainAspectRatio: false
				}
			}
		},
		widget9: {
			title: 'Spent',
			ranges: {
				TW: 'This Week',
				LW: 'Last Week',
				'2W': '2 Weeks Ago'
			},
			currentRange: 'TW',
			weeklySpent: {
				title: 'WEEKLY SPENT',
				count: {
					'2W': '2,682.85',
					LW: '1,445.34',
					TW: '3,630.15'
				},
				chart: {
					'2W': {
						datasets: [
							{
								label: 'Created',
								data: [2, 6, 5, 4, 5, 3, 6],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					LW: {
						datasets: [
							{
								label: 'Created',
								data: [4, 6, 2, 2, 1, 3, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					TW: {
						datasets: [
							{
								label: 'Created',
								data: [2, 6, 5, 4, 5, 3, 6],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					options: {
						legend: {
							display: false
						},
						maintainAspectRatio: false,
						scales: {
							xAxes: [
								{
									display: false
								}
							],
							yAxes: [
								{
									display: false
								}
							]
						}
					}
				}
			},
			totalSpent: {
				title: 'TOTAL SPENT',
				count: {
					'2W': '29,682.85',
					LW: '31,128.19',
					TW: '34,758.34'
				},
				chart: {
					'2W': {
						datasets: [
							{
								label: 'Created',
								data: [3, 2, 2, 4, 7, 7, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					LW: {
						datasets: [
							{
								label: 'Created',
								data: [5, 7, 8, 8, 6, 4, 1],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					TW: {
						datasets: [
							{
								label: 'Created',
								data: [6, 4, 7, 5, 5, 4, 7],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					options: {
						legend: {
							display: false
						},
						maintainAspectRatio: false,
						scales: {
							xAxes: [
								{
									display: false
								}
							],
							yAxes: [
								{
									display: false
								}
							]
						}
					}
				}
			},
			remaining: {
				title: 'REMAINING',
				count: {
					'2W': '94.317,15',
					LW: '92.871,81',
					TW: '89.241,66'
				},
				chart: {
					'2W': {
						datasets: [
							{
								label: 'Created',
								data: [1, 4, 5, 7, 8, 2, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					LW: {
						datasets: [
							{
								label: 'Created',
								data: [3, 2, 1, 4, 8, 8, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					TW: {
						datasets: [
							{
								label: 'Created',
								data: [2, 4, 8, 6, 2, 5, 1],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					options: {
						legend: {
							display: false
						},
						maintainAspectRatio: false,
						scales: {
							xAxes: [
								{
									display: false
								}
							],
							yAxes: [
								{
									display: false
								}
							]
						}
					}
				}
			},
			totalBudget: {
				title: 'TOTAL BUDGET',
				count: '124.000,00'
			}
		},
		widget10: {
			title: 'Budget Details',
			table: {
				columns: [
					{
						id: 'budget_type',
						title: 'Budget Type'
					},
					{
						id: 'total_budget',
						title: 'Total Budget'
					},
					{
						id: 'spent_usd',
						title: 'Spent ($)'
					},
					{
						id: 'spent_perc',
						title: 'Spent (%)'
					},
					{
						id: 'remaining_usd',
						title: 'Remaining ($)'
					},
					{
						id: 'remaining_perc',
						title: 'Remaining (%)'
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'budget_type',
								value: 'Wireframing',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$14,880.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$14,000.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%94.08',
								classes: 'text-green',
								icon: 'trending_up'
							},
							{
								id: 'remaining_usd',
								value: '$880.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%5.92',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'budget_type',
								value: 'Design',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$21,080.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$17,240.34',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%81.78',
								classes: 'text-green',
								icon: 'trending_up'
							},
							{
								id: 'remaining_usd',
								value: '$3,839.66',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%18.22',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'budget_type',
								value: 'Coding',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$34,720.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$3,518.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%10.13',
								classes: 'text-red',
								icon: 'trending_down'
							},
							{
								id: 'remaining_usd',
								value: '$31,202.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%89.87',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'budget_type',
								value: 'Marketing',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$34,720.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$0.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%0.00',
								classes: 'text-blue',
								icon: 'trending_flat'
							},
							{
								id: 'remaining_usd',
								value: '$34,720.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%100.00',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'budget_type',
								value: 'Extra',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$18,600.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$0.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '%0.00',
								classes: 'text-blue',
								icon: 'trending_flat'
							},
							{
								id: 'remaining_usd',
								value: '$34,720.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '%100.00',
								classes: '',
								icon: ''
							}
						]
					}
				]
			}
		},
		widget11: {
			title: 'Django CMS Addministration',
			Subtitle: 'Django CMS',
			table: {
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'name',
								value: 'Page Type'
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'name',
								value: 'Pages'
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'name',
								value: 'Pages Global Permisssions',
								link:'/CMS-Entities/Global-Permissions'
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'name',
								value: 'Static Placeholder',
								link:'/CMS-Entities/Static-Placeholder'

							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'name',
								value: 'User Group (Pages)',
								link:'/CMS-Entities/User-Group-PAGE'

							}
						]
					},
					{
						id: 6,
						cells: [
							{
								id: 'name',
								value: 'Users (Page)',
								link:'/CMS-Entities/Users',
							
							}
						]
					}
				]
			}
		},
		widget112: {
			title: 'Django CMS Blog Addministration',
			Subtitle: 'Django CMS Blog',
			table: {
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'name',
								value: 'Blog Articles',
							    link:"/CMS-Entities/blogArticles"	
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'name',
								value: 'Blog Categories',
								link:"/CMS-Entities/Blog-Categories"
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'name',
								value: 'Blog Configs',
								link:"/CMS-Entities/Blog_Config'"
							}
						]
					}
				]
			}
		},
		widget113: {
			title: 'Authentication & Authorization',
			Subtitle: 'Authentication & Authorization',
			table: {
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'name',
								value: 'Groups',
								link:'/CMS-Entities/Groups',
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'name',
								value: 'Users',
								link:'/CMS-Entities/Users',
							}
						]
					},
				]
			}
		},
		widget114: {
			title: 'CMS Projects',
			Subtitle: 'CMS Projects',
			table: {
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'name',
								value: 'Contact Us Quereys'
							}
						]
					},
				
				]
			}
		},
		
		weatherWidget: {
			locations: {
				NewYork: {
					name: 'New York',
					icon: 'rainy2',
					temp: {
						C: '22',
						F: '72'
					},
					windSpeed: {
						KMH: 12,
						MPH: 7.5
					},
					windDirection: 'NW',
					rainProbability: '98%',
					next3Days: [
						{
							name: 'Sunday',
							icon: 'rainy',
							temp: {
								C: '21',
								F: '70'
							}
						},
						{
							name: 'Monday',
							icon: 'cloudy',
							temp: {
								C: '19',
								F: '66'
							}
						},
						{
							name: 'Tuesday',
							icon: 'windy3',
							temp: {
								C: '24',
								F: '75'
							}
						}
					]
				}
			},
			currentLocation: 'NewYork',
			tempUnit: 'C',
			speedUnit: 'KMH'
		}
	},
	projects: [
		{
			id: 1,
			name: 'ACME Corp. Backend App'
		},
		{
			id: 2,
			name: 'ACME Corp. Frontend App'
		},
		{
			id: 3,
			name: 'Creapond'
		},
		{
			id: 4,
			name: 'Withinpixels'
		}
	]
};

mock.onGet('/api/project-dashboard-app/widgets').reply(config => {
	return [200, projectDashboardAppDB.widgets];
});

mock.onGet('/api/project-dashboard-app/projects').reply(config => {
	return [200, projectDashboardAppDB.projects];
});
