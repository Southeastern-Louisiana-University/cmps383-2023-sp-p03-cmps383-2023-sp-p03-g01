import { ActionIcon, Button, Flex, Modal, Stack, Title } from '@mantine/core';
import React, { useRef, useState } from 'react';
import { SeatType } from '../../../models/SeatTypes';
import QRCode from 'react-qr-code';
import Barcode from 'react-barcode';
import { AiOutlineBarcode, AiOutlinePrinter } from 'react-icons/ai';
import { BsQrCode } from 'react-icons/bs';
import ReactToPrint from 'react-to-print';
import { TicketSummaryProps, TicketSummary } from '../../common/TicketSummary';

interface TicketContainerProps {
    tickets: TicketSummaryProps;
}
const TicketContainer = ({ tickets }: TicketContainerProps): React.ReactElement => {
    const [modalOpened, setModalOpened] = useState(false);
    const [qrCodeIsSelected, setQrCodeIsSelected] = useState(true);
    const componentToPrint = useRef(null);

    const qrCodeVariant = qrCodeIsSelected ? 'filled' : 'outline';
    const barcodeVariant = qrCodeIsSelected ? 'outline' : 'filled';

    return (
        <Stack align='center'>
            <TicketSummary {...tickets} />
            <Button
                onClick={() => {
                    setModalOpened(true);
                }}
            >
                View Ticket
            </Button>

            <Modal
                opened={modalOpened}
                onClose={() => {
                    setModalOpened(false);
                }}
                centered
                size='auto'
            >
                <Stack align='center'>
                    <Stack
                        align='center'
                        ref={componentToPrint}
                        style={{
                            padding: '1rem',
                        }}
                    >
                        <TicketSummary {...tickets} />

                        <Flex
                            align='center'
                            style={{ height: '256px' }}
                        >
                            {qrCodeIsSelected ? (
                                <QRCode value={tickets.arrivalStation} />
                            ) : (
                                <Barcode value={tickets.arrivalStation} />
                            )}
                        </Flex>
                    </Stack>

                    <Flex gap='0.5rem'>
                        <ActionIcon
                            variant={qrCodeVariant}
                            size='lg'
                            onClick={() => {
                                setQrCodeIsSelected(true);
                            }}
                        >
                            <BsQrCode />
                        </ActionIcon>
                        <ActionIcon
                            variant={barcodeVariant}
                            size='lg'
                            onClick={() => {
                                setQrCodeIsSelected(false);
                            }}
                        >
                            <AiOutlineBarcode />
                        </ActionIcon>
                        <ReactToPrint
                            trigger={() => (
                                <ActionIcon
                                    variant='outline'
                                    size='lg'
                                >
                                    <AiOutlinePrinter />
                                </ActionIcon>
                            )}
                            content={() => componentToPrint.current}
                        />
                    </Flex>
                </Stack>
            </Modal>
        </Stack>
    );
};

/**
 * Displays the tickets that the user has purchased.
 */
export function ViewTicketsPage(): React.ReactElement {
    const TEST_DATA: TicketSummaryProps = {
        departureStation: 'Hammond, LA',
        arrivalStation: 'Baton Rouge, LA',
        departureTime: '12:01pm',
        arrivalTime: '2:15pm',
        duration: '2hr 14min',
        layover: null,
        dwellTime: '15min',
        seat: SeatType.COACH,
        cost: 152,
        passengerCount: 1,
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                gap: '2rem',
            }}
        >
            <Title>Upcoming Trips</Title>

            <Stack style={{ width: '100%' }}>
                <Title order={2}>May 8, 2023</Title>
                <Flex
                    wrap='wrap'
                    gap='2rem'
                >
                    <TicketContainer tickets={TEST_DATA} />
                </Flex>
            </Stack>

            <Stack style={{ width: '100%' }}>
                <Title order={2}>May 14, 2023</Title>
                <Flex
                    wrap='wrap'
                    gap='2rem'
                >
                    <TicketContainer tickets={TEST_DATA} />
                </Flex>
            </Stack>
        </div>
    );
}
